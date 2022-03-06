import React from "react";
import { ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button text="ahiahi" />;
