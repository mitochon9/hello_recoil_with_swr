import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TodoItemProps } from './TodoItem.type';
import { Icon } from '@/component/atom/Icon';
import { useTodo } from '@/hook/useTodo';

export const baseId = 'molecule-todo-item';

export const formInputSchema = z.object({
  text: z.string().nonempty(),
});

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isEditNum,
  toggleCompletedTodo,
  setIsEdit,
  removeTodo,
  closeEdit,
}) => {
  const { updateTodo } = useTodo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
    defaultValues: { text: todo.text },
  });

  const onSubmit = useCallback(
    (formData: z.infer<typeof formInputSchema>) => {
      updateTodo(todo.id, formData);
      closeEdit();
    },
    [todo.id, updateTodo, closeEdit],
  );

  return (
    <>
      <div data-testid={baseId} className='flex items-center gap-x-1'>
        {todo?.id === isEditNum ? (
          !handleSubmit ? null : (
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
              {errors.text && <p className='text-pink-700'>※ 入力が必要です</p>}
              <div className='flex items-center gap-x-1'>
                <input
                  {...register('text')}
                  className='w-full rounded-lg px-2 py-1 text-lg outline outline-primary-600'
                />
                <button type='submit'>
                  <Icon type='check' />
                </button>
                <button type='button' onClick={closeEdit}>
                  <Icon type='cancel' />
                </button>
              </div>
            </form>
          )
        ) : (
          <div className='flex w-full items-center gap-x-1'>
            <input
              type='checkbox'
              checked={todo.isCompleted}
              onChange={() => toggleCompletedTodo(todo.id)}
            />
            <p className='flex-1 truncate text-lg'>{todo.text}</p>
            <button onClick={() => setIsEdit(todo.id)}>
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
