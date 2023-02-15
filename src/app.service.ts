import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public itemNum:number = 0
  public items:string[] = []

  getHello(): string {
    return 'Hello World!';
  }

  createTodo(createBody) {
    //var decodedItem = JSON.parse(createBody)
    var item:string = createBody.item
    var itemNum = this.itemNum
    this.items[itemNum] = item
    this.itemNum++
    console.log(`Item: ${item} Item Num: ${itemNum}`)
    console.log({items:this.items})
    return{itemNum, items:this.items}
  }
}
