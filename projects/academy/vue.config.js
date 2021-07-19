const path = require('path')
const adminNodeModules = path.resolve(__dirname, './node_modules')
const sharedNodeModules = path.resolve(__dirname, '../shared/node_modules')

const admin = path.resolve(__dirname, 'src')
const academy = path.resolve(__dirname, '../academy/src')
const shared = path.resolve(__dirname, '../shared/src')

module.exports = {
  configureWebpack: {
    resolve: {
      modules: [adminNodeModules, sharedNodeModules], // this will allow `admin` module to import NPM packages from `shared`
      alias: {
        '@shared': shared,
        '@admin': admin,
        '@academy': academy
      }
    }
  }
}
