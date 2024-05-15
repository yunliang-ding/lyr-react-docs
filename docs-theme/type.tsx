import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default interface ConfigProps {
  /** 标题 */
  title?: string;
  /** icon */
  favicon?: string;
  /** 开发环境 script */
  devScript?: string[];
  /** 生产环境 script */
  buildScript?: string[];
  /** css */
  link?: string[];
  /** 忽略路由配置 */
  ignoreRouter?: string[];
  /** 是否开启资源包分析 */
  bundleAnalyzer?: BundleAnalyzerPlugin.Options;
  /** webpack 配置 */
  webpackConfig?: (mode: 'development' | 'production') => Configuration;
}

