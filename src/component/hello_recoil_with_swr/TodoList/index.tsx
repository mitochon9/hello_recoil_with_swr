import { TodoList as TodoListPresenter } from './TodoList';
import { useIsEdit } from '@/hook/useIsEdit';

const todoList = [
  { id: 1, text: 'completed', isCompleted: true },
  { id: 2, text: 'inCompleted', isCompleted: false },
  { id: 3, text: 'inCompleted', isCompleted: false },
];

const TodoList: React.FC = () => {
  const { isEditNum, setIsEdit, cancelEdit } = useIsEdit();

  const defaultProps = todoList?.map((todo) => ({
    todo: todo,
    isEditNum: isEditNum,
    toggleCompleted: () => alert('toggleCompleted'),
    setIsEdit: () => setIsEdit(todo.id),
    confirmEditTodo: () => alert('confirmEditTodo'),
    removeTodo: () => alert('removeTodo'),
    cancelEdit: () => cancelEdit(),
  }));

  return <TodoListPresenter todoList={defaultProps} />;
};

export { TodoList };
