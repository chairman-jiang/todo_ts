import { IMockType } from "./typings/mockType";

class TodoTemplate {
  protected todoView (todo: IMockType): string {
    const { id, title, complated } = todo;
    return `
      <input type="checkbox" ${complated ? 'checked' : ''} data-id="${id}" />
      <span style="text-decoration: ${complated ? 'line-through' : 'none'}">${title}</span>
      <button data-id="${id}">删除</button>
    `;
  }
}

export default TodoTemplate;
