import { Module } from '@nestjs/common';
import { HealthModule } from './modules/contexts/health/health.module';
import { CasimiroModule } from './modules/casimiro/casimiro.module';
@Module({
  imports: [HealthModule, CasimiroModule],
})
export class AppModule {}
