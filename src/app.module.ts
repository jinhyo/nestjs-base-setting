import { Module } from '@nestjs/common';
import { MyConfigModule } from './modules/my-config/my-config.module';

@Module({
  imports: [MyConfigModule],
  controllers: [],
})
export class AppModule {}
