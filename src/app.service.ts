import { Injectable } from '@nestjs/common';
import { TodoDTO } from './todo/todo.dto';

@Injectable()
export class AppService {
  public itemNum: number = 0
  public items: TodoDTO[] = []

  getHello(): string {
    return 'Hello World!';
  }

  createTodo(createBody) {
    var item: TodoDTO = {
      id: this.itemNum,
      title: createBody.title,
      status: createBody.status
    }

    this.items[this.itemNum] = item
    //this used to be before, see if anything breaks
    this.itemNum++
    console.log(this.items)
    return item
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

  deleteTodo(id: number) {
    //console.log(id)
    this.items[id] = null
    console.log(this.items)
    return this.items
  }
}
