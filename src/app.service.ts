import { Injectable } from '@nestjs/common';
import { TodoDTO } from './todo/todo.dto';
import { PrismaService } from './prisma.service';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  public itemNum: number = 0
  public items: TodoDTO[] = []


  async getTodo(){

      const todoList = await this.prisma.todo.findMany()
      //console.log(todoList)
      return todoList
  }

  async getTodoByID(id: string){
    const todoItem = await this.prisma.todo.findUnique({
      where:{
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

  

  updateTodo(id: number, createBody) {
    let tempItem: TodoDTO
    //console.log(createBody)
    this.items.map(todo => {
      if (todo) {
        if (todo.id === id) {
          if ("title" in createBody) {
            tempItem = { id, title: createBody.title, status: createBody.status }
          } else if (!("title" in createBody)) {
            const tempTitle = todo.title
            tempItem = { id, title: tempTitle, status: createBody.status }
          }
          //this used to have +1 in the [id]
          this.items[id] = tempItem
        }
      }
    })
    console.log(this.items)
    return this.items
  }

  async deleteTodo(id: number) {

    const deletedTodo = await this.prisma.todo.delete({
      where: {
        id: id
      },
    })

    return deletedTodo
    //console.log(id)
    /*
    this.items[id] = null
    console.log(this.items)
    return this.items*/

  }
}
