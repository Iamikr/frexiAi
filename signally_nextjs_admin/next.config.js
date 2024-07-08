const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  exportTrailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  eslint: {
    ignoreDuringBuilds: true
  }
});
