const mix = require("laravel-mix");
require("laravel-mix-jigsaw");

mix.disableSuccessNotifications();
mix.setPublicPath("source/assets/build");
mix.copy("source/_data", "source/assets/build/data");

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
  .version();
