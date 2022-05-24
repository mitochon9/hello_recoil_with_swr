export interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  isEditNum: number | undefined;
  toggleCompletedTodo: (id: number) => void;
  setIsEdit: (id: number) => void;
  removeTodo: (id: number) => void;
  closeEdit: () => void;
}
