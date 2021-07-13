import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'dev'
          ? '.env.dev'
          : process.env.NODE_ENV === 'test'
          ? '.env.test'
          : 'env.prod',

      validationSchema: Joi.object({
        NODE_ENV: Joi.valid('dev', 'test', 'prod'),
        FRONTENT_URL: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PWD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        AWS_ACCESS_KEY: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        AWS_REGION: Joi.string().required(),
        AWS_BUCKET: Joi.string().required(),
        NAVER_CLOUD_ACCESS_KEY_ID: Joi.string().required(),
        NAVER_CLOUD_SECRET_KEY: Joi.string().required(),
      }),
    }),
  ],
})
export class MyConfigModule {}
