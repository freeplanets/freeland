import { Body, Controller, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
import { ITodo } from '../todo/todo.if';

@Controller('copy-todo')
export class CopyTodoController {
    constructor(private readonly todoService: TodoService){}

    @Post()
    create(@Body() body:ITodo) {
        this.todoService.createTodo(body);
        return body;
    }
}
