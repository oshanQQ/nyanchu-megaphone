import React from "react";
import { ComponentMeta } from "@storybook/react";
import Form from ".";

export default {
  title: "Button",
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default1 = () => <Form />;
