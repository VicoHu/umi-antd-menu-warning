import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      component: '@/pages/index',
      routes: [
        { path: '/', component: '@/pages/home/index', redirect: '/home' },
        { path: '/home', component: '@/pages/home/index' },
      ],
    },
  ],
  fastRefresh: {},
  ssr: {
    // 更多配置
    // forceInitial: false,
    // removeWindowInitialProps: false
    // devServerRender: true,
    // mode: 'string',
    // staticMarkup: false,
  },
  esbuild: {},
  dynamicImport: {},
});
