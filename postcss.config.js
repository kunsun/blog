const postcssPresetEnv = require(`postcss-preset-env`)
// const postcssNesting = require("postcss-nesting")

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
    // postcssNesting(),
  ],
})
