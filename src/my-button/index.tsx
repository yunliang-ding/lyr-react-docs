import { ReactElement } from 'react';
import './index.less';

export default ({ children }: { children: ReactElement }) => {
  return <button className="my-btn">{children}</button>;
};
