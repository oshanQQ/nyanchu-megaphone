import { css } from "@emotion/react";

const form = css`
  width: 1000px;
  height: 180px;
  padding: 20px;
  font-size: x-large;
  border-radius: 50px;
  border-color: #4b82fe;
  border-width: 4px;
  background-color: white;
  resize: none;
  outline: none;
`;

const Form: React.VFC = () => {
  return <textarea css={form}></textarea>;
};

export default Form;
