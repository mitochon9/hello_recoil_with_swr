import { TodoFormProps } from './TodoForm.type';

const defaultProps: TodoFormProps = {
  createTodo: (text) => {
    alert(text);
  },
};

export const propObj: { [key: string]: TodoFormProps } = {
  default: defaultProps,
};
