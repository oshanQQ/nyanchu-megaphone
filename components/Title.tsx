import { ReactNode } from "react"

export const Title: React.FC = ({ children }) => (
  <h1 className="text-6xl font-black p-10 text-gray-700 text-center">
    { children }
  </h1>
);
