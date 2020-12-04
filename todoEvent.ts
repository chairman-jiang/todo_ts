import DataDom from "./todoDom";
import { IMockType } from "./typings/mockType";
import { isArrayList } from "./utils";

class DataEvent extends DataDom {
  private mockList: IMockType[];
  constructor(_mockList: IMockType[], htmlWrapper: HTMLElement) {
    super(htmlWrapper);
    this.mockList = _mockList;
    this.initList(_mockList);
  }

  public initList(todoList: IMockType[]) {
    if (isArrayList(todoList)) {
      todoList.forEach((t: IMockType) => {
        this.addItem(t);
      })
    }
  }

  public addTodo(item: IMockType): string | undefined {
    let findItem: null | IMockType = this.mockList.find((t: IMockType) => t.title === item.title);
    if (findItem) {
      return '已存在'
    }
    this.mockList.push(item);
    this.addItem(item);
  };

  public removeTodoItem (target: HTMLElement, id: number): void {
    this.mockList = this.mockList.filter((t: IMockType) => t.id !== id);
    this.removeItem(target);
  };
  
  public toggleTodoList (target: HTMLElement, id: number): void {
    this.mockList = this.mockList.map((t: IMockType) => {
      if (t.id === id) {
        t.complated =! t.complated;
        this.changeCompleted(target, t.complated);
      }
      return t;
    })
  }

}

export default DataEvent;
