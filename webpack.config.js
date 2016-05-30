module.exports = {
    entry: {
        js: './app.js'
    },
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel'
            }
        ]
    }
};