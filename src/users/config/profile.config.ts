import { registerAs } from '@nestjs/config';

// First is the namespace
// Second is a function that returns the profileConfig object
export default registerAs('profileConfig', () => ({
  apiKey: process.env.PROFILE_API_KEY,
}));
