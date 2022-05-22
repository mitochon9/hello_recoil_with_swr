import { CreateTodoProps } from './CreateTodo.type';

const defaultProps: CreateTodoProps = {
  createTodo: (text) => {
    alert(text);
  },
};

export const propObj: { [key: string]: CreateTodoProps } = {
  default: defaultProps,
};
