import { TodoList as TodoListPresenter } from './TodoList';
import { useIsEdit } from '@/hook/useIsEdit';
import { useTodo } from '@/hook/useTodo';

const TodoList: React.FC = () => {
  const { todoList, removeTodo, toggleCompleteTodo } = useTodo();

  const { isEditNum, setIsEdit, cancelEdit } = useIsEdit();

  const defaultProps = todoList?.map((todo) => ({
    todo: todo,
    isEditNum: isEditNum,
    toggleCompletedTodo: () => toggleCompleteTodo(todo.id, todo.isCompleted),
    setIsEdit: () => setIsEdit(todo.id),
    confirmEditTodo: () => alert('confirmEditTodo'),
    removeTodo: removeTodo,
    cancelEdit: () => cancelEdit(),
  }));

  return <TodoListPresenter todoList={defaultProps} />;
};

export { TodoList };
