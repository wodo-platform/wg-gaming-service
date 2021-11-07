import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from '../../../service/prisma.service';
import { GamingLoungeService } from './gaming.lounge.service';
import { GamingLoungeController } from './gaming.lounge.controller';
import { GamingLoungeStateController } from './gaming.launge.state.controller';
import { GamingLoungeTypeController } from './gaming.launge.type.controller';

@Module({
  imports: [ 
  ],
  providers: [
    PrismaService,
    GamingLoungeService
  ],
  controllers: [
    GamingLoungeController,
    GamingLoungeStateController,
    GamingLoungeTypeController
  ],
  exports: [GamingLoungeService]
})
export class GamingLoungeModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}