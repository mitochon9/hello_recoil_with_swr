import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TodoItemProps } from './TodoItem.type';
import { Icon } from '@/component/atom/Icon';

export const baseId = 'molecule-todo-item';

const formInputSchema = z.object({
  text: z.string().nonempty(),
});

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isEdit,
  toggleCompleted,
  setIsEditTodo,
  confirmEditTodo,
  removeTodo,
  cancelEditTodo,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
  });

  const onSubmit = useCallback(
    (formData: z.infer<typeof formInputSchema>) => {
      confirmEditTodo(formData.text);
    },
    [confirmEditTodo],
  );

  return (
    <>
      <div data-testid={baseId} className='flex items-center gap-x-1'>
        {isEdit ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.text && <p className='text-right text-pink-700'>※ 入力が必要です</p>}
            <div className='flex w-full items-center gap-x-1'>
              <input
                type='checkbox'
                checked={todo.isCompleted}
                onChange={() => toggleCompleted(todo.id)}
              />
              <input
                {...register('text')}
                className='w-80 rounded-lg px-2 py-1 text-lg outline outline-primary-600'
              />
              <button type='submit'>
                <Icon type='check' />
              </button>
              <button onClick={cancelEditTodo}>
                <Icon type='cancel' />
              </button>
            </div>
          </form>
        ) : (
          <div className='flex items-center gap-x-1'>
            <p className='w-80 truncate text-lg'>{todo.text}</p>
            <button onClick={() => setIsEditTodo(todo.id)}>
              <Icon type='edit' />
            </button>
            <button onClick={() => removeTodo(todo.id)}>
              <Icon type='trash' />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
