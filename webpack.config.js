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
            test: /\.(png|jpg|gif|JPG)$/,
            loaders: [
                'file-loader'
            ]
        }
        ]
    },
    devServer: {
        historyApiFallback: {
            index: "alyssa/index.html"
        },
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
    }
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
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
    }
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
    devServer: {
        historyApiFallback: {
            rewrites: [{
                from: /^\/booking/,
                to: '/nginx/public/booking/index.html'
            },]
        }
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
    }
},
{
    entry: './src/birthday/index.js',
    output: {
        path: __dirname + "/nginx/public/birthday/",
        publicPath: '/birthday/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', ['@babel/preset-react', {
                    "throwIfNamespace": false // defaults to true
                }]]
            },

        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {}
            }]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }]
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './nginx/public',
    }
}
];