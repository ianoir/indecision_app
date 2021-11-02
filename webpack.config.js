const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: ['@babel/polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            sourceMapFilename: '[file].map'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [{
                            loader: MiniCssExtract.loader
                        },
                        'css-loader',
                        'sass-loader'
                        ]
                }
            ]
        },
        plugins: [
            new MiniCssExtract({
                filename: "styles.css"
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};