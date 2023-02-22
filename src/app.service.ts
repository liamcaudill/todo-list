import { Injectable } from '@nestjs/common';
import { TodoDTO } from '/home/ubuntu/todo-list/src/todo/todo.dto';

@Injectable()
export class AppService {
  public itemNum:number = 0
  public items:TodoDTO[] = []

  getHello(): string {
    return 'Hello World!';
  }

  createTodo(createBody) {
    //var decodedItem = JSON.parse(createBody)
    //console.log(createBody.item)
    var item:TodoDTO = {
    id: this.itemNum,
    title: createBody.title,
    status: 'todo'
    }
    this.items = [...this.items, item]
    this.itemNum++
    console.log(this.items)
    return item
  }
}
