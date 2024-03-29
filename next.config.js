const path = require('path')
const withReactSvg = require('next-react-svg')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/'),
  webpack(config) {
    return config
  },
})
