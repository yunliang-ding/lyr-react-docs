/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect } from 'react';
import Layout from './layout';
import Loading from '../loading';
import Error from '../error';
import uiStore from '../store/ui';
import { generate, getRgbStr } from '@arco-design/color';

export default () => {
  const { dark, status } = uiStore.useSnapshot();
  useEffect(() => {
    if (dark) {
      // 设置为暗黑主题
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      // 恢复亮色主题
      document.body.removeAttribute('arco-theme');
    }
  }, [dark]);
  // 更新主题
  const setTheme = (newColor: string | undefined) => {
    const newList = generate(newColor, {
      list: true,
      dark,
    });
    newList.forEach((l, index) => {
      const rgbStr = getRgbStr(l);
      document.body.style.setProperty(`--arcoblue-${index + 1}`, rgbStr);
    });
    uiStore.primaryColor = newColor;
  };
  useEffect(() => {
    setTheme(uiStore.primaryColor);
  }, [uiStore.primaryColor]);
  let Vnode: any = null;
  if (status === 'loading') {
    Vnode = <Loading />;
  } else if (status === 'error') {
    Vnode = <Error />;
  } else {
    Vnode = <Layout />;
  }
  return Vnode;
};
