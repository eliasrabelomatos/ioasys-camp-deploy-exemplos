import { Module } from '@nestjs/common';
import { GetController } from './contexts/get.controller';
import { GetService } from './contexts/get.service';

@Module({
  controllers: [GetController],
  providers: [GetService],
})
export class CasimiroModule {}
