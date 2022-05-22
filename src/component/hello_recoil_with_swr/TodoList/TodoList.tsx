import { TodoListProps } from './TodoList.type';
import { TodoItem } from '@/component/molecule/TodoItem';

export const baseId = 'project-todo-list';

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => (
  <>
    <div className='grid gap-y-4'>
      {todoList.map((todo) => (
        <TodoItem key={todo.todo.id} {...todo} />
      ))}
    </div>
  </>
);
