import React from "react";
import { Meta, StoryFn as Story} from '@storybook/react';
import { Button, ButtonProps } from "./Button.tsx";

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    text: 'Primary Button',
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Secondary Button',
    type: 'secondary',
};

