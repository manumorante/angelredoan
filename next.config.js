const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/angelredouan/' : '',
  basePath: isProd ? '/angelredouan/' : '',
  images: {
    unoptimized: true,
  },
}
