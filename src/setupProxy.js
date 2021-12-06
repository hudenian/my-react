const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/proxyApi', {
            target: 'http://localhost:18888',
            changeOrigin: true,
            pathRewrite: {
                '^/proxyApi': '/proxyApi',
            },
        }),
    )
}
