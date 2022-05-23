import { ComponentMeta, Story } from '@storybook/react';
import { TodoForm } from './TodoForm';
import { propObj } from './TodoForm.props';
import { TodoFormProps } from './TodoForm.type';

export default {
  title: 'project/TodoForm',
  component: TodoForm,
} as ComponentMeta<typeof TodoForm>;

const Template: Story<TodoFormProps> = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
