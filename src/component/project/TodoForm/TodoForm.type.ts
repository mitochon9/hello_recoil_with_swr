import { FieldError, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import { formInputSchema } from '.';

export interface TodoFormProps {
  register: UseFormRegister<{
    text: string;
  }>;
  handleSubmit: UseFormHandleSubmit<{
    text: string;
  }>;
  errors: {
    text?: FieldError | undefined;
  };
  onSubmit: (formData: z.infer<typeof formInputSchema>) => void;
}
