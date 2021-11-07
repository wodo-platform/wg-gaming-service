import { Injectable, Logger } from '@nestjs/common';
import GameServerNotification from './model/game.server.notification';


@Injectable()
export class GameServerNotificationService {

  private readonly logger = new Logger(GameServerNotificationService.name);

  private notificationCache = new Map();

  constructor() {
    this.logger.debug("#### new instance ####");
  }

  public async sendGameServerNotification(gameServerNotification:GameServerNotification): Promise<any> {
    this.logger.debug(`sending notification [${JSON.stringify(gameServerNotification)}]`);
    return await this.notificationCache.set(gameServerNotification.id,gameServerNotification);
  }

  public async findAll() : Promise<any> {
    let array = Array.from(this.notificationCache, ([id, value]) => ({ id, value }));
    return array;
  }

}