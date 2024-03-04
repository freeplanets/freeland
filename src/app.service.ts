import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name?:string): string {
    return `Hello World! ${name}`;
  }

  getUser(id:number):string {
    return `user id: ${id}`;
  }
}
