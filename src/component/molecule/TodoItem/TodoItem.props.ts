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
    isEditNum: 2,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },
    setIsEdit: () => {
      alert('setIsEdit');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEdit: () => {
      alert('cancelEdit');
    },
  },
  inCompleted: {
    todo: {
      id: 1,
      text: 'inCompleted',
      isCompleted: false,
    },
    isEditNum: 2,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },

    setIsEdit: () => {
      alert('setIsEdit');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEdit: () => {
      alert('cancelEdit');
    },
  },
  edit: {
    todo: {
      id: 1,
      text: 'Edit',
      isCompleted: false,
    },
    isEditNum: 1,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },

    setIsEdit: () => {
      alert('setIsEdit');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEdit: () => {
      alert('cancelEdit');
    },
  },
  longText: {
    todo: {
      id: 1,
      text: 'LongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongText',
      isCompleted: false,
    },
    isEditNum: 2,
    toggleCompleted: () => {
      alert('toggleCompleted');
    },

    setIsEdit: () => {
      alert('setIsEdit');
    },
    confirmEditTodo: (text) => {
      alert(text);
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    cancelEdit: () => {
      alert('cancelEdit');
    },
  },
};
