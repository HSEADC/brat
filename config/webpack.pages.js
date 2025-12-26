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
  createPage("./src/pages/plug.html", "./pages/plug.html"),
  createPage("./src/pages/categories.html", "./pages/categories.html"),
  createPage(
    "./src/pages/categories/home_technologies.html",
    "./pages/categories/home_technologies.html"
  ),
  createPage("./src/pages/styleguide.html", "./pages/styleguide.html"),
];

module.exports = htmlPages;
