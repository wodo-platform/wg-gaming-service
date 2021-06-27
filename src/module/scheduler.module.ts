import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TaskManager } from '../service/scheduler/task.manager.service';


@Module({
  imports: [
  ],
  providers: [
    TaskManager
  ],
  controllers: [
  ],
  exports: [TaskManager]
})
export class SchadulerModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
   
  }
}