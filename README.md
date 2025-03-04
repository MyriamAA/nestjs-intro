<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Compodoc Documentation

### Script

```bash
$ npm run doc
```

Let me name this as doc.

To see the coverage

```bash
$ http://localhost:3001/coverage.html
```

It should be a comma over here.

Now this script itself a little bit verbose and lengthy, and I'll try to explain all the parts of the

script as we go.

So first of all, we need to use NPCs and along with Compo Doc in order to generate the Compo Doc documentation.

So we use at the rate compo doc, which is the name of the package.

So compo doc slash compo doc.

So this basically triggers the compo doc package for us.

And then we need to provide it certain configurations.

The first one is the path to the pts config file.

So hyphen path to the pts config file TTS config file is within the root of the project itself.

So we use tsconfig.json.

So it's going to pick up this particular config file which is there in the root of our project.

So this particular TTS config file over here.

Now once we have provided the TTS config file, the next flag that we want to add is the s flag.

Now what this flag does is that it instructs compared to serve generated documentation on a port.

Now, having said that, I want to have a specific port number as well.

So I use hyphen hyphen port.

And let's serve the documentation on port 3001.

With that, I also want to enable Compo doc to watch for changes within my code.

So whenever I'm writing any new code, it should watch for changes and regenerate the documentation

whenever needed.

Finally, I want to give it a specific directory for generating the documentation so we can use a hyphen

d flag, which instructs combo doc to generate the documentation within a specific directory, which

we can pass as an argument.

So here I'm saying within the root of my project, just use the documentation directory to generate

your documentation.

The details can be seen at localhost:3001

Always define both sides of the relationships in many to many relationships i.e tags and posts

## Generate a service

```bash
$ npx nest generate service tags/providers/tags --flat --no-spec
```

## Generate a module

```bash
$ npx nest generate module auth
```

## Generate a controller

```bash
$ npx nest generate controller auth --no-spec
```

## Generate a provider

```bash
$ npx nest generate pr users/providers/users-create=many.provider --flat --no-spec
```

## Prettier

```bash
$ npx prettier --write .
```

## Start the db

Run this in cmd

```bash
$ pg_ctl start -D "C:\users\mfabouatmeh\Desktop\CodesDar\more\Postgre\data"
```

# Pagination

The _posts.service.ts_ **findAll()** method:
We can pass in the skip and take.

The _skip_ is the number of post entries that you want to skip from the first page. So if your first page has ten posts in the second page, you will have this post starting from post number 11 to post number 20.

So basically you're skipping ten posts and _take_ is the number of posts that you want to return in one query.
