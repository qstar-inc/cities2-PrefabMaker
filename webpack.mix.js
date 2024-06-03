const mix = require("laravel-mix");
require("laravel-mix-jigsaw");
const path = require("path");

const isProduction = mix.inProduction();
const envConfig = isProduction
  ? path.resolve(__dirname, "source/_assets/js/env.prod.js")
  : path.resolve(__dirname, "source/_assets/js/env.dev.js");

mix.disableSuccessNotifications();
mix.setPublicPath("source/assets/build");

mix
  .jigsaw()
  .js("source/_assets/js/main.js", "js")
  .js("source/_assets/js/brand_maker.js", "js")
  .css("source/_assets/css/main.css", "css", [
    require("postcss-import"),
    require("tailwindcss"),
  ])
  .options({
    processCssUrls: false,
  })
  .webpackConfig({
    resolve: {
      alias: {
        "@env": envConfig,
      },
    },
  });

if (isProduction) {
  mix.version();
}
