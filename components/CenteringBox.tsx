import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export const CenteringBox: React.FC<Props> = ({ children }) => (
  <div className="text-center">
    { children }
  </div>
);
