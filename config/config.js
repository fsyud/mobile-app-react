import path from 'path'
import theme from '../src/theme';

// ref: https://umijs.org/config/
export default {
    // gzip 后的尺寸能减少 10K
    treeShaking: true,
    // 路由模式
    history: 'hash',
    hash: true,
    // 浏览器兼容版本
    targets: {
      android: 5,
      ios: 7,
      chrome: 58,
      ie: 9,
    },
    // 配置插件列表
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: '产品案例库',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
        hd: true
      }],
    ],
    publicPath: './',
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
    theme: {
      'brand-primary': theme.primaryColor,
    },
    // http://mkt.51job.com/pm/2019
    proxy: {
      "/api": {
        "target": 'http://mkt.51job.com/pm/2019',
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
      }
    }
  }
  