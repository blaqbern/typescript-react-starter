const { root } = require('../utils')

module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIndentName: '[local]__[name]__[base64:5]',
      },
    },
  ],
  include: [
    root('src', 'components'),
    root('src', 'assets', 'shared-styles'),
  ],
}
