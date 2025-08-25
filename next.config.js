/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath for production builds, not development
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/my_website',
    assetPrefix: '/my_website/',
  }),
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Ensure static export works properly
  distDir: 'out',
}

module.exports = nextConfig
