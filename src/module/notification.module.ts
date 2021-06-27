import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GameServerNotificationService } from '../service/notification/game.server.notification.service';
import { NotificationController } from '../controller/notification/notification.controller';

@Module({
  imports: [
  ],
  providers: [
    GameServerNotificationService,
  ],
  controllers: [
    NotificationController
  ],
  exports: [GameServerNotificationService]
})

export class NotificationModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}