import { ReactNode, MouseEvent } from "react";

type Props = {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const NormalButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="w-60 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-md text-center text-gray bg-gray-50 hover:bg-gray-100 font-medium"
      onClick={onClick}
    >
      { children }
    </button>
  );
};
