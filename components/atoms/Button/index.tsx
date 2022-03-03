type Props = {
  children: string;
};

const Button: React.VFC<Props> = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default Button;
