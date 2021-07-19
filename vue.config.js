const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      // projects: [adminNodeModules, sharedNodeModules], // this will allow `admin` module to import NPM packages from `shared`
      alias: {
        '@': path.resolve(__dirname, "./src"),
        '@shared': path.resolve(__dirname, 'projects/shared/src'),
        '@admin': path.resolve(__dirname, 'projects/admin/src'),
        '@academy': path.resolve(__dirname, 'projects/academy/src'),
      }
    }
  }
}
