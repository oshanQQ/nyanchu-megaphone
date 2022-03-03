import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default1 = () => <Button>{"Click me"}</Button>;

export const Default2 = () => <Button>{"Click me"}</Button>;

export const Default3 = () => <Button>{"Click me"}</Button>;
