import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
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
  dynamicImport: {}
});
