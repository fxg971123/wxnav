const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
	// baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}