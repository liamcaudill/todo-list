import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDTO } from './todo/todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
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

  @Get("/api/todo")
  getTodos(): TodoDTO[] {
    return this.appService.items
  }
  
  @Post("/api/todo")
  createTodo(@Req() req) {
    const body = req.body;
    return this.appService.createTodo(body)
  }
  
@Put("/api/todo/:id")
  updateTodo(@Req() req, @Param() params) {

    const idNum = parseInt(params.id)
    const body = req.body
    return this.appService.updateTodo(idNum, body)
  }

  @Delete("/api/todo/:id")
  deleteTodo(@Param() params) {
    const idNum = parseInt(params.id)
    return this.appService.deleteTodo(idNum)
  }
}
