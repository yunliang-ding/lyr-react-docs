import ReactDom from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/index';
import ErrorBoundary from './error-boundary';
import router from '@/.lyr/router';
import ConfigProps from './type';
import './global.less';

const App = () => {
  const element = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: router.map((item) => ({
        ...item,
        element: item.component,
        errorElement: <ErrorBoundary />,
      })),
    },
  ]);
  return <RouterProvider router={element} />;
};

interface AppProps {
  element?: string;
}

export const runApp = async ({
  element = '#root',
}: AppProps) => {
  ReactDom.render(<App />, document.querySelector(element));
};

export const defineConfig = (props: ConfigProps) => {
  return props;
};