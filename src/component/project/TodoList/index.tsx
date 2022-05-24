import { TodoList as TodoListPresenter } from './TodoList';
import { useIsEdit } from '@/hook/useIsEdit';
import { useTodo } from '@/hook/useTodo';

const TodoList: React.FC = () => {
  const { todoList, removeTodo, toggleCompleteTodo, updateTodo } = useTodo();

  const { isEditNum, setIsEdit, closeEdit } = useIsEdit();

  const defaultProps = todoList?.map((todo) => ({
    todo: todo,
    isEditNum: isEditNum,
    toggleCompletedTodo: () => toggleCompleteTodo(todo.id, todo.isCompleted),
    setIsEdit: () => setIsEdit(todo.id),
    updateTodo: updateTodo,
    removeTodo: removeTodo,
    closeEdit: () => closeEdit(),
  }));

  return <TodoListPresenter todoList={defaultProps} />;
};

export { TodoList };
