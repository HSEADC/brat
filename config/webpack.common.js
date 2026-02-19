const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const htmlPages = require("./webpack.pages.js");

module.exports = {
  entry: "./src/javascripts/index.js",
  
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: "javascripts/index.js", 
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif|ttf|otf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },

  plugins: [
    ...htmlPages, 
    new MiniCssExtractPlugin({
      filename: "stylesheets/layout.css", 
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images", noErrorOnMissing: true },
        { from: "src/stylesheets", to: "stylesheets", noErrorOnMissing: true },
        { from: "src/javascripts", to: "javascripts", noErrorOnMissing: true },
        { from: "src/audio", to: "audio", noErrorOnMissing: true },
        { from: "src/fonts", to: "fonts", noErrorOnMissing: true },
        { 
          from: "src/pages", 
          to: "pages", 
          noErrorOnMissing: true,
          globOptions: {
            ignore: ["**/*.html"], 
          },
        },
      ],
    }),
  ],
};