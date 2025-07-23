import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('RidhiShala Keycloak API')
  .addBearerAuth()
  .setDescription('API for managing users in RidhiShala using Keycloak')
  .setVersion('1.0')
  .build();
  const documemnt = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documemnt);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
