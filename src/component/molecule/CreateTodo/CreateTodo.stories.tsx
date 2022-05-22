import { ComponentMeta, Story } from '@storybook/react';
import { CreateTodo } from './CreateTodo';
import { propObj } from './CreateTodo.props';
import { CreateTodoProps } from './CreateTodo.type';

export default {
  title: 'molecule/CreateTodo',
  component: CreateTodo,
} as ComponentMeta<typeof CreateTodo>;

const Template: Story<CreateTodoProps> = (args) => <CreateTodo {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
