import { Todo } from '@prisma/client';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { z } from 'zod';
import { formInputSchema } from '@/component/project/TodoForm';

interface UseSetTodoReturnType {
  getTodoList: (url: string) => Promise<Todo[] | undefined>;
  createTodo: (formData: z.infer<typeof formInputSchema>) => void;
}

interface UseTodoReturnType extends UseSetTodoReturnType {
  todoList?: Todo[] | undefined;
}

export const useTodo = (): UseTodoReturnType => {
  const { getTodoList } = useSetTodo();
  const setTodoList = useSetTodo();
  const { data: todoList } = useSWR<Todo[] | undefined>('todoList', getTodoList);

  return { todoList, ...setTodoList };
};

export const useSetTodo = (): UseSetTodoReturnType => {
  const getTodoList = async (): Promise<Todo[] | undefined> =>
    await axios
      .get('api/todo')
      .then((res) => res.data)
      .catch((error) => console.error(error));

  const { mutate } = useSWRConfig();
  const createTodo = async (formData: z.infer<typeof formInputSchema>) => {
    const body = { formData };
    await mutate('todoList', async () => {
      await axios.post('api/todo', body).catch((error) => console.error(error));
    });
  };

  return { getTodoList, createTodo };
};
