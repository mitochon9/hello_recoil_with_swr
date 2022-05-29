import { z } from 'zod';
import { TodoForm as TodoFormPresenter } from './TodoForm';
import { TodoFormProps } from './TodoForm.type';
import { useTodo } from '@/hook/useTodo';

export const formInputSchema = z.object({
  text: z.string().nonempty(),
});

const TodoForm: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit } = useTodo();
  const setTodo = {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };

  const defaultProps: TodoFormProps = {
    setTodo,
  };
  return <TodoFormPresenter {...defaultProps} />;
};

export { TodoForm };
