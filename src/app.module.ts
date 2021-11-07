import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationModule } from './module/notification/notification.module';
import { GameServerModule } from './module/gameserver/game.server.module';
import { SchadulerModule } from './module/scheduler/scheduler.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule, Routes, RouteTree } from '@nestjs/core';
import { GamingLoungeModule } from './module/gaming/lounge/gaming.lounge.module';
import { GamingOrchestratorModule } from './module/gaming/orchestrator/orchestrator.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from '@wodo-platform/wg-shared-lib/dist/wodogaming/error/errors.interceptor';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ScheduleModule.forRoot(),
    SchadulerModule,
    NotificationModule,
    GameServerModule,
    GamingLoungeModule,
    RouterModule.register([ 
      {
        path: 'api',
        module: GameServerModule
      } as RouteTree,
      {
        path: 'api',
        module: GamingLoungeModule
      } as RouteTree,
      ,
      {
        path: 'api',
        module: GamingOrchestratorModule
      } as RouteTree,
    ] as Routes),
  ],
  controllers: [
    AppController
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    }, 
    AppService
  ]
})
export class ApplicationModule {}
