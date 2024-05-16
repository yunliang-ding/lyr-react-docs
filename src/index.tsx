import { ReactElement } from "react";

export const MyButton = ({ children }: { children: ReactElement }) => {
  return <button>{children}</button>;
};
