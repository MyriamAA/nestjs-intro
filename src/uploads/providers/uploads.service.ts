import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Upload } from '../upload.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { UploadFileInterface } from '../interfaces/upload-file.interface';
import { fileTypes } from '../enums/file-types.enum';

@Injectable()
export class UploadsService {
  constructor(
    /**
     * Inject uploadsRepo
     *  */
    @InjectRepository(Upload)
    private readonly uploadsRepository: Repository<Upload>,

    /**
     * Inject uploadToAwsProvider
     */

    private readonly uploadToAwsProvider: UploadToAwsProvider,

    private readonly configService: ConfigService,
  ) {}

  public async uploadFile(file: Express.Multer.File) {
    try {
      // Throw an error if unsupported type
      if (
        !['image/gif', 'image/jpeg', 'image/jpg', 'image/png'].includes(
          file.mimetype,
        )
      ) {
        throw new BadRequestException('Mime Type not supported');
      }
      // Upload to the file to AWS S3 bucket
      const name = await this.uploadToAwsProvider.fileUpload(file);

      // Generate to a new entry in db
      const uploadFile: UploadFileInterface = {
        name: name,
        path: `https://${this.configService.get('appConfig.awsCloudFrontUrl')}/${name}}`,
        type: fileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };

      const upload = this.uploadsRepository.create(uploadFile);

      return await this.uploadsRepository.save(upload);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
