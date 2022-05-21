import { ComponentMeta, Story } from '@storybook/react';
import { Icon } from './Icon';
import { IconProps } from './Icon.type';

export default {
  title: 'atom/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Edit: Story<IconProps> = Template.bind({});
Edit.args = { type: 'edit' };

export const Trash: Story<IconProps> = Template.bind({});
Trash.args = { type: 'trash' };

export const Check: Story<IconProps> = Template.bind({});
Check.args = { type: 'check' };

export const Cancel: Story<IconProps> = Template.bind({});
Cancel.args = { type: 'cancel' };
