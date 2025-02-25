const { override } = require('customize-cra')

module.exports = override((config) => {
  // Disable source map loader for Mediapipe
  const sourceMapLoader = config.module.rules.find(
    (rule) =>
      rule.use &&
      rule.use.some(({ loader }) => loader.includes('source-map-loader'))
  )
  if (sourceMapLoader) {
    sourceMapLoader.exclude = /@mediapipe\/tasks-vision/
  }

  return config
})
