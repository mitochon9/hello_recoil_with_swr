import { ComponentMeta, Story } from '@storybook/react';
import { TodoItem } from './TodoItem';
import { propObj } from './TodoItem.props';
import { TodoItemProps } from './TodoItem.type';

export default {
  title: 'molecule/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

const Template: Story<TodoItemProps> = (args) => <TodoItem {...args} />;

export const Completed = Template.bind({});
Completed.args = propObj.completed;

export const InCompleted = Template.bind({});
InCompleted.args = propObj.inCompleted;

export const Edit = Template.bind({});
Edit.args = propObj.edit;

export const LongText = Template.bind({});
LongText.args = propObj.longText;
