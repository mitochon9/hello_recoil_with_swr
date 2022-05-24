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
    toggleCompletedTodo: () => {
      alert('toggleCompletedTodo');
    },
    setIsEdit: () => {
      alert('setIsEdit');
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    closeEdit: () => {
      alert('closeEdit');
    },
  },
  inCompleted: {
    todo: {
      id: 1,
      text: 'inCompleted',
      isCompleted: false,
    },
    isEditNum: 2,
    toggleCompletedTodo: () => {
      alert('toggleCompletedTodo');
    },

    setIsEdit: () => {
      alert('setIsEdit');
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    closeEdit: () => {
      alert('closeEdit');
    },
  },
  edit: {
    todo: {
      id: 1,
      text: 'Edit',
      isCompleted: false,
    },
    isEditNum: 1,
    toggleCompletedTodo: () => {
      alert('toggleCompletedTodo');
    },

    setIsEdit: () => {
      alert('setIsEdit');
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    closeEdit: () => {
      alert('closeEdit');
    },
  },
  longText: {
    todo: {
      id: 1,
      text: 'LongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongTextLongText',
      isCompleted: false,
    },
    isEditNum: 2,
    toggleCompletedTodo: () => {
      alert('toggleCompletedTodo');
    },

    setIsEdit: () => {
      alert('setIsEdit');
    },
    removeTodo: () => {
      alert('removeTodo');
    },
    closeEdit: () => {
      alert('closeEdit');
    },
  },
};
