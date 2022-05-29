import { FieldError, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { formInputSchema } from '.';

export interface TodoFormProps {
  setTodo: {
    register?: UseFormRegister<z.infer<typeof formInputSchema>>;
    handleSubmit?: UseFormHandleSubmit<z.infer<typeof formInputSchema>>;
    errors?: { text?: FieldError | undefined };
    onSubmit: (formData: z.infer<typeof formInputSchema>) => void;
  };
}
