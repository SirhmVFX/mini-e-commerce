// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Proxy middleware
  server.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.timbu.cloud",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // remove /api from the URL
      },
    }),
  );

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
