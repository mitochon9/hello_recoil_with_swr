import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TodoForm as TodoFormPresenter } from './TodoForm';
import { TodoFormProps } from './TodoForm.type';
import { useTodo } from '@/hook/useTodo';

export const formInputSchema = z.object({
  text: z.string().nonempty(),
});

const TodoForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
  });

  const { createTodo } = useTodo();

  const resetForm = useCallback(() => {
    reset();
  }, [reset]);

  const onSubmit = useCallback(
    (formData: z.infer<typeof formInputSchema>) => {
      createTodo(formData);
      resetForm();
    },
    [createTodo, resetForm],
  );

  const defaultProps: TodoFormProps = {
    register: register,
    handleSubmit: handleSubmit,
    errors: errors,
    onSubmit: onSubmit,
  };
  return <TodoFormPresenter {...defaultProps} />;
};

export { TodoForm };
