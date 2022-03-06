import React from "react";
import { ComponentMeta } from "@storybook/react";
import Form from ".";

export default {
  title: "Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default1 = () => <Form />;
