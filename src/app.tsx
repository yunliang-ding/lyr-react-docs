import { runApp } from 'lyr';
import NProgress from 'nprogress';
import Loading from '@/components/loading';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  minimum: 0.3,
  easing: 'ease-in-out',
});

runApp({
  /** 节点 */
  element: '#root',
  /** loading */
  loading: () => <Loading />,
  /** 加载勾子 */
  getInitData: async () => {
    return {
      auth: [],
      userInfo: {
        menus: [
          {
            label: "组件",
            path: '/component',
            children: [{
              id: 'user',
              label: 'user',
              path: '/component/user',
            },
            {
              id: 'good',
              label: 'GoodBod',
              path: '/component/good-bod',
            },]
          }
        ],
      },
    };
  },
});
