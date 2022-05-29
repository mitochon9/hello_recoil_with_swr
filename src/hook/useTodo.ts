import { zodResolver } from '@hookform/resolvers/zod';
import { Todo } from '@prisma/client';
import axios from 'axios';
import { useCallback } from 'react';
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import useSWR, { useSWRConfig } from 'swr';
import { z } from 'zod';

interface UseSetTodoReturnType {
  getTodoList: (url: string) => Promise<Todo[] | undefined>;
  register?: UseFormRegister<z.infer<typeof formInputSchema>>;
  handleSubmit?: UseFormHandleSubmit<z.infer<typeof formInputSchema>>;
  errors?: { text?: FieldError | undefined };
  onSubmit: (formData: z.infer<typeof formInputSchema>) => void;
  removeTodo: (id: number) => void;
  toggleCompleteTodo: (id: number, isCompleted: boolean) => void;
  updateTodo: (id: number, formData: z.infer<typeof formInputSchema>) => void;
}

interface UseTodoReturnType extends UseSetTodoReturnType {
  todoList?: Todo[] | undefined;
}

export const formInputSchema = z.object({
  text: z.string().nonempty(),
});

export const useTodo = (): UseTodoReturnType => {
  const { getTodoList } = useSetTodo();
  const setTodoList = useSetTodo();
  const { data: todoList } = useSWR<Todo[] | undefined>('todoList', getTodoList);

  return { todoList, ...setTodoList };
};

export const useSetTodo = (): UseSetTodoReturnType => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formInputSchema>>({
    resolver: zodResolver(formInputSchema),
  });

  const resetForm = useCallback(() => {
    reset();
  }, [reset]);

  const getTodoList = async (): Promise<Todo[] | undefined> =>
    await axios
      .get('api/todo')
      .then((res) => res.data)
      .catch((error) => console.error(error));

  const { mutate } = useSWRConfig();
  const createTodo = useCallback(
    async (formData: z.infer<typeof formInputSchema>) => {
      const body = { formData };
      await mutate('todoList', async () => {
        await axios.post('api/todo', body).catch((error) => console.error(error));
      });
    },
    [mutate],
  );

  const onSubmit = useCallback(
    (formData: z.infer<typeof formInputSchema>) => {
      createTodo(formData);
      resetForm();
    },
    [createTodo, resetForm],
  );

  const removeTodo = async (id: number) => {
    await mutate('todoList', async () => {
      const body = { type: 'remove' };
      await axios
        .put('api/todo', body, { params: { id: id } })
        .catch((error) => console.error(error));
    });
  };

  const toggleCompleteTodo = async (id: number, isCompleted: boolean) => {
    await mutate('todoList', async () => {
      const body = { type: 'complete', isCompleted };
      await axios
        .put('api/todo', body, { params: { id: id } })
        .catch((error) => console.error(error));
    });
  };

  const updateTodo = async (id: number, formData: z.infer<typeof formInputSchema>) => {
    await mutate('todoList', async () => {
      const body = { type: 'update', formData };
      await axios
        .put('api/todo', body, { params: { id: id } })
        .catch((error) => console.error(error));
    });
  };

  return {
    getTodoList,
    register,
    handleSubmit,
    errors,
    onSubmit,
    removeTodo,
    toggleCompleteTodo,
    updateTodo,
  };
};
