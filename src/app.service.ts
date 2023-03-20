import { Injectable } from '@nestjs/common';
import { TodoDTO } from './todo/todo.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  async getTodo() {

    const todoList = await this.prisma.todo.findMany({
      orderBy: [
        {
          id: 'asc',
        },
      ]
    })
    //console.log(todoList)
    return todoList
  }

  async getTodoByID(id: string) {
    const todoItem = await this.prisma.todo.findUnique({
      where: {
        id: parseInt(id)
      }
    })

    return todoItem
  }

  createTodo(createBody) {

    const data = this.prisma.todo.create({
      data: {
        title: createBody.title
      }
    })

    return data
  }



  async updateTodo(id: number, createBody) {

    //console.log(createBody.status)

    const updatedTodo = await this.prisma.todo.update({
      where: {
        id: id
      },
      data: {
        status: createBody.status
      },
    })

    return updatedTodo
  }

  async deleteTodo(id: number) {

    //console.log(id)

    const deletedTodo = await this.prisma.todo.delete({
      where: {
        id: id
      },
    })

    //console.log(deletedTodo)

    return deletedTodo
  }
}
