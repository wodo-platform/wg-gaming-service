import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from '../../../service/prisma.service';
import { GamingOrchestratorService } from './gaming.orchestrator.service'
import { GamingOrchestratorController } from './gaming.orchestrator.controller'

@Module({
  imports: [ 
  ],
  providers: [
    PrismaService,
    GamingOrchestratorService
  ],
  controllers: [
    GamingOrchestratorController
  ],
  exports: [GamingOrchestratorService]
})
export class GamingOrchestratorModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}