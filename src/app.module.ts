import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CopyTodoModule } from './features/copy-todo/copy-todo.module';
import { HandsomeModule } from './modules/handsome/handsome.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';

@Module({
  imports: [
    CopyTodoModule, 
    HandsomeModule,
  ],
  controllers: [AppController],
  providers: [AppService, 
    //{ provide: APP_FILTER,   useClass: HttpExceptionFilter,  }
  ],
})
export class AppModule {}
