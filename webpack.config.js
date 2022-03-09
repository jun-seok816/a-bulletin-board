/**
 * root part
 *
 * @description
 * 		-
 *
 * @Revision
 *   00. Job    : Create
 *       Date   : 2022.1.10
 *       Worker : osjbox@gmail.com
 *       Note   :
 *
 */

//                                                       +=============================
//=======================================================+ import
//                                                       +=============================
const mv_Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mv_Mode = process.env.NODE_ENV || 'development'

console.log('%s process.env.NODE_ENV="%s"',__filename,process.env.NODE_ENV);

//                                                       +=============================
//=======================================================+ config
//                                                       +=============================

const mv_Result = 
{
        mode: mv_Mode,

        //                                          +-------------------------
        // -----------------------------------------+ target
        //                                          +-------------------------
        // https://webpack.js.org/configuration/target
        // webpack 이 web 환경용으로 동작하도록 설정, (hdr, 2020.12.28)
        target: 'web',

        //                                          +-------------------------
        // -----------------------------------------+ entry
        //                                          +-------------------------
        entry: {
            "index" : './src/index.tsx',
        },

        //                                          +-------------------------
        // -----------------------------------------+ output
        //                                          +-------------------------
        // https://webpack.kr/configuration/output/#outputlibrary
        output: {
            path: mv_Path.resolve(__dirname, '../back/views'),
            filename: 'index.js',
            clean : true,
            //chunkFormat: 'commonjs'
        },

  //                                          +-------------------------
  // -----------------------------------------+ resolve
  //                                          +-------------------------

  resolve: {
    extensions: ['.tsx','.ts','.jsx','.js','.json', '.css', '.scss', 'html'],

    // 2021.12.20
    // javascript 의 console 과 fs 을 사용하는경우 webpack 으로 Packaging 을 하는경우에
    // 오류가 발생한다. 이를 Packaging 하지 않고 무시하도로 설정함.
    fallback: {
      // https://www.npmjs.com/package/console-browserify
      //"console": require.resolve("console-browserify"),
      "console": false,
      "fs" : false,
    }
  },

  //                                          +-------------------------
  // -----------------------------------------+ module
  //                                          +-------------------------
  module: {
    rules: [
        {
          test: /\.jsx?$/,   // .js or .jsx 
          exclude: /node_modules/,
          use : [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              }
            },
          ],
        },
        {
          test: /\.tsx?$/,   
          exclude: /node_modules/,
          use : [
            {
              loader : 'ts-loader'
            }
          ],
        },
        {
          test: /\.(sc|c)ss$/,  // .scss .css
          use: [
            //'cache-loader',
            //MiniCssExtractPlugin.loader,
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg|html)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
    ]
},

  //                                          +-------------------------
  // -----------------------------------------+ performance
  //                                          +-------------------------
  performance: {
    hints: false
  },
  //                                          +-------------------------
  // -----------------------------------------+ devtool
  //                                          +-------------------------
  // https://webpack.js.org/configuration/devtool#devtool
  // source 맵 형태를 선택한다.
  devtool: 'inline-source-map',
  // devtool: 'inline-source-map',

  //                                          +-------------------------
  // -----------------------------------------+ optimization
  //                                          +-------------------------
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify:false,
      templateContent: `
      <html>
        <head>
          <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    `
    })
  ],


        //                                          +-------------------------
        // -----------------------------------------+ devServer
        //                                          +-------------------------
        // https://webpack.js.org/configuration/dev-server/
        devServer: {
          historyApiFallback: {
            rewrites : [
              { from: /^\/$/, to: 'index.html' }
            ]
          },
          static : [
            {
              directory: mv_Path.resolve(__dirname, './demo'),
              publicPath: '/',
              watch: true,
            },
            {
              directory: mv_Path.resolve(__dirname, './src'),
              publicPath: '/jsLib',
              watch: true,
            },
          ],

          // https://github.com/webpack/webpack-dev-middleware
          devMiddleware: {
            index: true,
            publicPath: '/',
            // serverSideRender: true,
            writeToDisk: true,  // 파일로 저장을 해야 웹브라우저에 새로운 Build 가 전달 된다.
          },

          client : {
            progress : true,
            overlay: true,
          },

          hot: true,  // HMR 을 켠다.
          compress: false,
        },

}

//                                                       +=============================
//=======================================================+ NODE_ENV
//                                                       +=============================

if (process.env.NODE_ENV === 'production') {
  //module.exports.devtool = 'inline-source-map'
  mv_Result.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  mv_Result.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

//                                                       +=============================
//=======================================================+ exports
//                                                       +=============================
module.exports = mv_Result;
