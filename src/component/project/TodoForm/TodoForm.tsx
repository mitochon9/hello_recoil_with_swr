import { TodoFormProps } from './TodoForm.type';
import { Icon } from '@/component/atom/Icon';

export const baseId = 'project-todo-form';

export const TodoForm: React.FC<TodoFormProps> = ({ setTodo }) => (
  <>
    <div>
      <h2>Todo Form</h2>
      <div className='flex items-center gap-x-1'>
        {setTodo.handleSubmit ? (
          <form onSubmit={setTodo.handleSubmit(setTodo.onSubmit)} className='w-full'>
            {setTodo.errors?.text && <p className='text-right text-pink-700'>※ 入力が必要です</p>}
            <div className='flex items-center gap-x-1'>
              <input
                {...(setTodo.register && setTodo.register('text'))}
                className='w-full rounded-lg px-2 py-1 text-lg outline outline-primary-600'
              />
              <button type='submit'>
                <Icon type='plus' />
              </button>
            </div>
          </form>
        ) : (
          // Storybook 表示用
          <form className='w-full'>
            {setTodo.errors?.text && <p className='text-right text-pink-700'>※ 入力が必要です</p>}
            <div className='flex items-center gap-x-1'>
              <input
                {...(setTodo.register && setTodo.register('text'))}
                className='w-full rounded-lg px-2 py-1 text-lg outline outline-primary-600'
              />
              <button type='button' onClick={() => alert('Create Todo')}>
                <Icon type='plus' />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </>
);
