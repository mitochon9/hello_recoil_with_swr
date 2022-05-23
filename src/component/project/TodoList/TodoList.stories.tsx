import { ComponentMeta, Story } from '@storybook/react';
import { TodoList } from './TodoList';
import { propObj } from './TodoList.props';
import { TodoListProps } from './TodoList.type';

export default {
  title: 'project/TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: Story<TodoListProps> = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
