const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPage(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPage("./src/index.html", "./index.html"),
  createPage("./src/pages/404.html", "./pages/404.html"),
  createPage("./src/pages/about.html", "./pages/about.html"),
  createPage("./src/pages/chronology.html", "./pages/chronology.html"),
  createPage("./src/pages/collections.html", "./pages/collections.html"),
  createPage("./src/pages/exsposition.html", "./pages/exsposition.html"),
  createPage("./src/pages/gallery.html", "./pages/gallery.html"),
  createPage("./src/pages/interview.html", "./pages/interview.html"),
  createPage("./src/pages/promo.html", "./pages/promo.html"),
  createPage("./src/pages/team.html", "./pages/team.html"),
  createPage(
    "./src/pages/chronologies/chrono_00.html",
    "./pages/chronologies/chrono_00.html"
  ),
  createPage(
    "./src/pages/chronologies/chrono_80.html",
    "./pages/chronologies/chrono_80.html"
  ),
  createPage(
    "./src/pages/chronologies/chrono_90.html",
    "./pages/chronologies/chrono_90.html"
  ),
  createPage(
    "./src/pages/exspositions/home_technolohies.html",
    "./pages/exspositions/home_technolohies.html"
  ),
  createPage(
    "./src/pages/exspositions/media.html",
    "./pages/exspositions/media.html"
  ),
  createPage(
    "./src/pages/exspositions/profession.html",
    "./pages/exspositions/profession.html"
  ),
  createPage(
    "./src/pages/exspositions/urban_space.html",
    "./pages/exspositions/urban_space.html"
  ),
  createPage(
    "./src/pages/interviews/interview_1.html",
    "./pages/interviews/interview_1.html"
  ),
];

module.exports = htmlPages;
