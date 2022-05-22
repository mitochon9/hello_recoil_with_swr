import { TodoItemProps } from './TodoItem.type';

interface PropObj {
  completed: TodoItemProps;
  inCompleted: TodoItemProps;
  edit: TodoItemProps;
  longText: TodoItemProps;
}

export const propObj: PropObj = {
  completed: {
    todo: {
      id: 1,
      text: 'completed',
      isCompleted: true,
    },
    isEdit: false,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },
    setIsEditTodo: () => {
      alert('setIsEditTodo');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEditTodo: () => {
      alert('cancelEditTodo');
    },
  },
  inCompleted: {
    todo: {
      id: 1,
      text: 'inCompleted',
      isCompleted: false,
    },
    isEdit: false,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },

    setIsEditTodo: () => {
      alert('setIsEditTodo');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEditTodo: () => {
      alert('cancelEditTodo');
    },
  },
  edit: {
    todo: {
      id: 1,
      text: 'Edit',
      isCompleted: false,
    },
    isEdit: true,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },

    setIsEditTodo: () => {
      alert('setIsEditTodo');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEditTodo: () => {
      alert('cancelEditTodo');
    },
  },
  longText: {
    todo: {
      id: 1,
      text: 'LongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongText',
      isCompleted: false,
    },
    isEdit: false,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },

    setIsEditTodo: () => {
      alert('setIsEditTodo');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEditTodo: () => {
      alert('cancelEditTodo');
    },
  },
};
