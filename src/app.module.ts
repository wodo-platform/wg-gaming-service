import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationModule } from './module/notification.module';
import { GameServerModule } from './module/game.server.module';
import { SchadulerModule } from './module/scheduler.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    SchadulerModule,
    NotificationModule,
    GameServerModule,
    RouterModule.register([
      {
        path: 'api',
        module: GameServerModule
      },
    ]),
  ],
  controllers: [
    AppController
  ],
  providers: [ AppService]
})
export class ApplicationModule {}
