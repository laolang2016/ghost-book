const modules = ['index', 'article']

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getModuleEntry = (moduleName) => {
    return path.resolve(__dirname, '../src/build/' + moduleName + '.js')
}

const getModuleHtml = (moduleName) => {
    return new HtmlWebpackPlugin({
        filename: 'html/' + moduleName + '.html',
        template: './src/html/' + moduleName + '.html',
        chunks: ['common', moduleName],
        inject: true,
        hash: true
    })
}

const moduleConfig = {
    entry: {},
    html: []
}

modules.forEach((m) => {
    moduleConfig.entry[m] = getModuleEntry(m)
    moduleConfig.html.push(getModuleHtml(m))
})
module.exports = moduleConfig
