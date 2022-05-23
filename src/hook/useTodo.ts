import { Todo } from '@prisma/client';
import axios from 'axios';
import useSWR from 'swr';

interface UseSetTodoReturnType {
  getTodoList: (url: string) => Promise<Todo[] | undefined>;
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

  return { getTodoList };
};
