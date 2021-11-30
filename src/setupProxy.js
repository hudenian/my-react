const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/react', {
            target: 'http://localhost:8888',
            changeOrigin: true,
            pathRewrite: {
                '^/react': '/react',
            },
        }),
    )
}
