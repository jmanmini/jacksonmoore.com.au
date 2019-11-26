var webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = [{
    entry: './src/alyssa/index.js',
    output: {
        path: __dirname + "/nginx/public/alyssa/",
        publicPath: '/alyssa/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.(png|jpg|gif|JPG|svg)$/,
            loaders: [
                'file-loader'
            ]
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
        historyApiFallback: {
            index: '/alyssa/index.html'
        },
    },
    plugins: [
        new DashboardPlugin(),
    ],
},
{
    entry: './src/work/index.js',
    output: {
        path: __dirname + "/nginx/public/work/",
        publicPath: '/work/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            },

        },
        {
            test: /\.(png|jpg|gif|webp)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
        historyApiFallback: {
            index: '/work/index.html'
        },
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new BundleAnalyzerPlugin({
            'analyzerMode': 'static',
            'reportFilename': __dirname + '/reports/'

        })
    ]
},
{
    entry: './src/booking/index.js',
    output: {
        path: __dirname + "/nginx/public/booking/",
        publicPath: '/booking/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            },

        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
        historyApiFallback: {
            index: '/booking/index.html'
        },
    }
},
];