import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'OMG-RC-CLI',
  logo: 'https://avatars1.githubusercontent.com/u/59638652?s=200&v=4',
  locales: [['zh-CN', '中文']],
  mode: 'site',
  outputPath: '../page_server/static',
  favicon: 'https://avatars1.githubusercontent.com/u/59638652?s=200&v=4',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/Ncnbb/omg-rc-cli',
    },
  ]
});
