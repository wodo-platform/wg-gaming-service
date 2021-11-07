import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const appOptions = {cors: true, bufferLogs: true};
  const app = await NestFactory.create(ApplicationModule, appOptions);
  app.useLogger(app.get(Logger));

  const options = new DocumentBuilder()
    .setTitle('Wodo Game Lounge API')
    .setDescription('Wodo Lounge microservice in order to handle business logic for game lounge and game server relaated cases.')
    .setVersion('1.0')
    .setBasePath('api')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
