import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
config();

async function bootstrap() {


  const app = await NestFactory.create(AppModule, { cors: true });
  const config=new DocumentBuilder()
  .setTitle('Bungie weapons API')
  .setDescription('The Bungie weapons API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`${process.env.RABBITMQ_LOCAL_URL}`],
      queue: 'bungie_queue',
      queueOptions: {
        durable: false,
      },
    },
  })

  await app.startAllMicroservices();

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
