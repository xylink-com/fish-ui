export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  outputPath: "/docs",
  base: "/xy-element",
  publicPath: "/xy-element/",
  mode: 'site',
  title: 'xy-element',
  favicon: '/xy-element/favicon.ico',
  logo: '/xy-element/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  resolve: {
    includes: ['guide', 'src'],
  },
  links: [{ rel: 'stylesheet', href: '/xy-element/style.css' }],
  navs: {
    'zh-CN': [
      // 加载默认的 nav 选项
      null,
    ],
    'en-US': [null],
  },
};
