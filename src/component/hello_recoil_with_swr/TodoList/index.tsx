import { TodoList as TodoListPresenter } from './TodoList';
import { TodoListProps } from './TodoList.type';

const TodoList: React.FC = () => {
  const defaultProps: TodoListProps = {
    todoList: [
      {
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
      {
        todo: {
          id: 2,
          text: 'inCompleted',
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
      {
        todo: {
          id: 3,
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
    ],
  };
  return <TodoListPresenter {...defaultProps} />;
};

export { TodoList };
