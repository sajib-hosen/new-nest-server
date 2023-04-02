import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [],
        synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// https://www.youtube.com/watch?v=F4ohRXIL6e4&list=PLkZU2rKh1mT-3VvYvGCdRVCCJ5lCtOKED&index=6
