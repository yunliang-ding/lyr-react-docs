import { ReactElement } from "react";
import './index.less';

export const MyButton = ({ children }: { children: ReactElement }) => {
  return <button className="my-btn">{children}</button>;
};
