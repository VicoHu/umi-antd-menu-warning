const render = async () => {
  const render = require('../dist/umi.server');
  const { html, error } = await render({
    // 对应后端框架的 path/url
    // 例如 ctx.path（Koa）、req.url（Express）、ctx.request.url（Egg.js）
    path: '/',
  });
}
render().then(r => {
  console.log("ssr done")
});
