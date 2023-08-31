import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    //No exemplo da aula o cara usou module: AppModule e httpAdapter:new FastifyAdapter()
    // mesmo que não documentação esteja igual o exemplo que fiz.
  );
  await app.listen(3000, '0.0.0.0');
  // Aqui também o cara usou address:'0.0.0.0'
}
bootstrap();
