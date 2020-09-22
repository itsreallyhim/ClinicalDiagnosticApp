module.exports = {
    devServer: { https: true },

    configureWebpack: {
        externals: {
            config: JSON.stringify({
                apiUrl: 'http://localhost:5000'
            })
        }
    }
};
