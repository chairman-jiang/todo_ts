import TodoTemplate from "./TodoTemplate";
import { IMockType } from "./typings/mockType";
import { findElementNodeByClassName } from "./utils";

class DataDom extends TodoTemplate {
  private htmlWrapper: HTMLElement;
  constructor(_htmlWrapper: HTMLElement) {
    super();
    this.htmlWrapper = _htmlWrapper;
  }

  protected addItem (todo: IMockType) {
    const oItem: HTMLElement = document.createElement('div');
    oItem.className = 'todo-item';
    oItem.innerHTML = this.todoView(todo);
    this.htmlWrapper.appendChild(oItem);
  }

  protected removeItem (target: HTMLElement) {
    const oParentNode: HTMLElement = findElementNodeByClassName(target, 'todo-item');
    oParentNode.remove();
  }

  protected changeCompleted (target: HTMLElement, completed: boolean) {
    const oParentNode: HTMLElement = findElementNodeByClassName(target, 'todo-item');
    const oContent = oParentNode.querySelector('span');
    oContent.style.textDecoration = completed ? 'line-through' : 'none';
  }

};
export default DataDom;
