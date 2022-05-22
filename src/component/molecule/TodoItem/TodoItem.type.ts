export interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  isEdit: boolean;
  toggleCompleted: (id: number) => void;
  setIsEditTodo: (id: number) => void;
  confirmEditTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  cancelEditTodo: () => void;
}
