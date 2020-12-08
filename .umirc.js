export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  outputPath: "/docs",
  base: "/xy-components",
  publicPath: "/xy-components/",
  mode: 'site',
  title: 'xy-components',
  favicon: '/xy-components/favicon.ico',
  logo: '/xy-components/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  resolve: {
    includes: ['guide', 'src'],
  },
  links: [{ rel: 'stylesheet', href: '/xy-components/style.css' }],
  navs: {
    'zh-CN': [
      // 加载默认的 nav 选项
      null,
    ],
    'en-US': [null],
  },
};
