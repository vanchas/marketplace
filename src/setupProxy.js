const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {

  app.use("/api/auth/login",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/auth/register ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );
  
  app.use("/register/activate_email/:token ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/register/activate_sms/:token ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/auth/logout ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/auth/user ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/auth/user/update/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/auth/user/destroy/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/complaints ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/complaints/add ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/complaints/update/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/desires/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );
  
  app.use("/api/desires/update/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/desires/add ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/desires/search ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/desires/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );

  app.use("/api/desires/archive/:id ",
    createProxyMiddleware({
      target: "http://localhost:3000",
      secure: false,
      changeOrigin: true
    })
  );
};
