const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: '/src/jscode/app.js',
   output: {
      filename: 'bundle.[chankhash].js',
      path: path.resolve(__dirname, 'publick'),
      assetModuleFilename: "assets/[hash][ext][query]"
   },
   devServer:{
      port: 3000
   },
   plugins: [
      new HTMLPlugin({
         filename: 'index.html',
         template: './src/index.html'
      }),
      new HTMLPlugin({
         filename: 'basket.html',
         template: './src/basket.html'
      }),
      new CleanWebpackPlugin(),
   ],
   module: {
      rules: [
         {
         test: /\.html$/i,
         loader: "html-loader",
         },
         {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
         {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
         },
         {
         test: /\.(ttf|woff|woff2|eot)$/i,
         use: 'asset/resource',
         },
         {
            test: /\.(js|json)$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          },
      ],
   },
}