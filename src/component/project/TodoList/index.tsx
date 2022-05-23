import { TodoList as TodoListPresenter } from './TodoList';
import { useIsEdit } from '@/hook/useIsEdit';
import { useTodo } from '@/hook/useTodo';

const TodoList: React.FC = () => {
  const { todoList } = useTodo();

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
