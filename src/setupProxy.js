const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/react', {
            target: 'http://81.68.242.174:18888',
            // target: 'http://localhost:18888',
            changeOrigin: true,
            pathRewrite: {
                '^/react': '/react',
            },
        }),
    )
}
