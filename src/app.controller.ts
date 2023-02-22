import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDTO } from '/home/ubuntu/todo-list/src/todo/todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/liam")
  getLiam() {
    return {time: new Date()}
  }
  */

  @Get()
  getTodos(): TodoDTO[] {
    return this.appService.items
  }

  @Post("/api/todo")
  createTodo(@Req() req) {
    const body = req.body;
    return this.appService.createTodo(body)
  }
}
