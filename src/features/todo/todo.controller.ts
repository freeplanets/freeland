import { Body, Controller, Get, HttpStatus, NotAcceptableException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from 'src/classes/create-todo.dto';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Get(':id')
    @UsePipes(new ValidationPipe({transform:true}))
    getTodo(@Param('id') id:number) {
        return `todo id:${typeof id} ${id}`;
    }

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true}))
    createTodo(@Body() dto:CreateTodoDto){
        return {id: 1, ...dto };
    }
}
