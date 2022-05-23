import { TodoListProps } from './TodoList.type';

const defaultProps: TodoListProps = {
  todoList: [
    {
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
    {
      todo: {
        id: 2,
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
    {
      todo: {
        id: 3,
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
  ],
};

export const propObj: { [key: string]: TodoListProps } = {
  default: defaultProps,
};
