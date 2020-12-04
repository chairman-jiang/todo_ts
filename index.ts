import DataEvent from "./todoEvent";
import { IMockType } from "./typings/mockType";

let slInput: HTMLInputElement = document.querySelector('.sl-input');
let slButton: HTMLButtonElement = document.querySelector('.sl-button');
let slList: HTMLDivElement = document.querySelector('.sl-list');

const mockList: IMockType[] = [
  { id: 1, title: 'asd', complated: false },
  { id: 2, title: 'a123', complated: false },
  { id: 3, title: 'asdddd', complated: false }
];

const init = (): void => {
  bindEvent();
}

const dataEvent: DataEvent = new DataEvent(mockList, slList);

const bindEvent = (): void => {
  slButton.addEventListener('click', handleButtonClick, false);
  slList.addEventListener('click', handleListClick, false);
}

function handleButtonClick(e: MouseEvent): void {
  const inputValue = slInput.value.trim();
  if (inputValue.length) {
    const result = dataEvent.addTodo(<IMockType>{
      id: Number.parseInt(String(Math.random() * 1000)),
      title: inputValue,
      complated: false
    });
    if (typeof result === 'string') {
      alert(result);
    }
    slInput.value = '';
  }
}

function handleListClick (e: MouseEvent): void {
  const tar: HTMLElement = e.target as HTMLElement;
  const nodeName = tar.nodeName;
  if (nodeName === 'INPUT' || nodeName === 'BUTTON') {
    switch (nodeName) {
      case 'INPUT':
        dataEvent.toggleTodoList(tar, Number(tar.dataset.id));
        break;
      case 'BUTTON':
        dataEvent.removeTodoItem(tar, Number(tar.dataset.id));
        break;
      default:
        break;
    }
  }
}

init();
