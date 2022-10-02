import { Module } from '@nestjs/common';
import { SetupController } from './setup/controllers/setup.controller';

@Module({
  imports: [],
  controllers: [SetupController],
})
export class AppModule {}
