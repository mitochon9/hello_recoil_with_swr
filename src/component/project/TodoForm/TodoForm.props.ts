import { TodoFormProps } from './TodoForm.type';

const defaultProps: TodoFormProps = {
  onSubmit: () => {
    alert('onSubmit');
  },
};

export const propObj: { [key: string]: TodoFormProps } = {
  default: defaultProps,
};
