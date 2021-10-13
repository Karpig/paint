const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  plugins: [
    postcssImport(),
    postcssNested(),
    postcssCustomMedia({
      // importFrom: './src/assets/styles/_variables.css',
    }),
  ],
};
