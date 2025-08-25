/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath for production builds, not development
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
  }),
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
