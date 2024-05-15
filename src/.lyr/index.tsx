import { ReactElement, useEffect } from 'react';
import ReactDom from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/layouts/index';
import ErrorBoundary from '@/pages/error-boundary';
import router from './router';
import AuthRouter from './auth';
import ConfigProps from './type';
import axios, { AxiosRequestConfig } from 'axios';
import breadcrumbStore from '@/store/breadcrumb';
import { PageHeaderProps } from '@arco-design/web-react';

import '@/global.less';

const store = {
  request: axios.create({}),
  initData: {
    auth: [''],
    userInfo: {},
  },
};

export const request = store.request;

export const initData = store.initData;

const App = () => {
  const element = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: router.map((item) => ({
        ...AuthRouter(item),
        errorElement: <ErrorBoundary />,
      })),
    },
  ]);
  return <RouterProvider router={element} />;
};

interface AppProps {
  element?: string;
  loading?: () => ReactElement;
  getInitData?: () => Promise<{
    auth: string[];
    userInfo: any;
  }>;
  axiosConfig?: AxiosRequestConfig & {
    requestInterceptors?: any;
    responseInterceptors?: any;
  };
}

export const runApp = async ({
  element = '#root',
  getInitData = async () => ({
    auth: [''],
    userInfo: {}
  }),
  loading = () => <span>加载中...</span>,
  axiosConfig = {},
}: AppProps) => {
  /** 创建 axios 实例 */
  const axiosinstance = axios.create(axiosConfig);
  if (typeof axiosConfig.requestInterceptors === 'function') {
    axiosinstance.interceptors.request.use(axiosConfig.requestInterceptors);
  }
  if (typeof axiosConfig.responseInterceptors === 'function') {
    axiosinstance.interceptors.response.use(axiosConfig.responseInterceptors);
  }
  Object.assign(store.request, axiosinstance); // 覆盖下
  ReactDom.render(loading(), document.querySelector(element));
  Object.assign(store.initData, await getInitData()); // 覆盖下
  ReactDom.render(<App />, document.querySelector(element));
};

export const defineConfig = (props: ConfigProps) => {
  return props;
};

export const useBreadCrumb = () => {
  useEffect(() => {
    return () => {
      Object.assign(breadcrumbStore, {
        title: '',
        breadcrumb: undefined,
        extra: [],
      });
    };
  }, []);
  return {
    update: (options: PageHeaderProps) => {
      setTimeout(() => {
        Object.assign(breadcrumbStore, options);
      }, 10);
    },
  };
};

