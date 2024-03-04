import { Injectable } from '@nestjs/common';
import { ITodo } from './todo.if';

@Injectable()
export class TodoService {
    private todos: ITodo[] = [
        {
            id: 1,
            title: 'Title 1',
            description: '',
        }
    ];

    getTodos() {
        return this.todos;
    }

    createTodo(todo:ITodo) {
        this.todos.push(todo);
    }
}
