const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/*", {
      target: "https://apfhd1018.github.io",
      changeOrigin: true,
    })
  );
};
