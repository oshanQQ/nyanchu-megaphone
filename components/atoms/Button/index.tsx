type Props = {
  text: string;
};

const Button: React.VFC<Props> = ({ text }: Props) => {
  return <button>{text}</button>;
};

export default Button;
