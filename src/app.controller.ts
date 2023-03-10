import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDTO } from './todo/todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/api/todo/")
  getTodos() {
    return this.appService.getTodo()
  }

  
  @Get("/api/todo/:id")
  getTodosByID(@Param() params) {
    return this.appService.getTodoByID(params.id)
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
