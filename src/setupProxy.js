const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      "/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f",
      {
        target: "https://newsapi.org",
        secure: false,
        changeOrigin: true,
      }
    )
  );
};
