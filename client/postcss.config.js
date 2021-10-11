const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssApply = require('postcss-apply');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssHEXRBGA = require('postcss-hexrgba');

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({ stage: 0 }),
    postcssApply(),
    postcssNested(),
    postcssCustomMedia({
      importFrom: './src/assets/styles/_variables.css',
    }),
    postcssHEXRBGA(),
  ],
};
