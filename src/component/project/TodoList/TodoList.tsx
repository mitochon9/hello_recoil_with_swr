import { TodoListProps } from './TodoList.type';
import { TodoItem } from '@/component/molecule/TodoItem';

export const baseId = 'project-todo-list';

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => (
  <>
    <div>
      <h2>Todo List</h2>
      <div className='grid gap-y-4 rounded-lg border-2 border-primary-600 bg-primary-100 p-4'>
        {todoList?.map((todo) => (
          <TodoItem key={todo.todo.id} {...todo} />
        ))}
      </div>
    </div>
  </>
);
