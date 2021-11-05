const CracoLessPlugin = require('craco-less');
const target = 'http://127.0.0.1:5005';
module.exports = {
    webpack: {
        devServer: (devServerConfig) => {
            devServerConfig.proxy = {
                '/api/': { target, secure: false, changeOrigin: true, },
            }
            return devServerConfig;
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#0050b3'
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};