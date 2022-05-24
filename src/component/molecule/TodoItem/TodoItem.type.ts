export interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  isEditNum: number | undefined;
  toggleCompletedTodo: (id: number) => void;
  setIsEdit: (id: number) => void;
  confirmEditTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  cancelEdit: () => void;
}
