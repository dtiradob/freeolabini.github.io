const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = config => {

  config.addPlugin(pluginRss);

  config.addPassthroughCopy("img")
  config.addPassthroughCopy("fonts")
  config.addPassthroughCopy("css")

  return {
    templateFormats: [
      "md",
      "njk",
      "css",
      "xml",
      "jpg",
      "png",
      "ico",
      "eot",
      "svg",
      "ttf",
      "woff",
      "woff2"
    ],
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "_src",
      output: process.env.PWD
    }
  }
}
