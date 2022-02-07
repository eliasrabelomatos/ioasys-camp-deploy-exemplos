import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetService } from './get.service';

@Controller('casimires')
export class GetController {
  constructor(private readonly service: GetService) {}

  @ApiTags('casimires')
  @Get()
  index(): Promise<{ quote: string }> {
    return this.service.execute();
  }
}
