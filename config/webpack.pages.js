const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPage("./src/index.html", "./index.html"),
  createPage("./src/pages/about.html", "./pages/about.html"),
  createPage("./src/pages/promo.html", "./pages/promo.html"),
];

module.exports = htmlPages;
