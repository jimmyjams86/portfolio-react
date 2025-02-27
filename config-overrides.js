const { override } = require('customize-cra')

module.exports = override((config) => {
  // Disable source map loader for Mediapipe
  if (config.module && config.module.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (
        rule.use &&
        rule.use.some(({ loader }) => loader.includes('source-map-loader'))
      ) {
        return { ...rule, exclude: [/node_modules\/@mediapipe\/tasks-vision/] }
      }
      return rule
    })
  }

  // Suppress warnings in Webpack
  config.ignoreWarnings = [/Failed to parse source map/]

  return config
})
