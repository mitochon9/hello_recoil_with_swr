import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CreateTodoProps } from './CreateTodo.type';
import { Icon } from '@/component/atom/Icon';

export const baseId = 'molecule-create-todo';

const formInputSchema = z.object({
  text: z.string().nonempty(),
});

export const CreateTodo: React.FC<CreateTodoProps> = ({ createTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
  });

  const onSubmit = useCallback(
    (formData: z.infer<typeof formInputSchema>) => {
      createTodo(formData.text);
    },
    [createTodo],
  );

  return (
    <>
      <div>
        <h2>Create Todo</h2>
        <div className='flex items-center gap-x-1'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            {errors.text && <p className='text-right text-pink-700'>※ 入力が必要です</p>}
            <div className='flex items-center gap-x-1'>
              <input
                {...register('text')}
                className='w-full rounded-lg px-2 py-1 text-lg outline outline-primary-600'
              />
              <button>
                <Icon type='plus' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
