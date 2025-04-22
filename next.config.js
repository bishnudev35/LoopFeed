/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
         ignoreDuringBuilds: true,
       },
       reactStrictMode: true,
       typescript: {
      ignoreBuildErrors: true,
     },
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true,
    fontLoadTimeout: 10000,
  }
}

module.exports = nextConfig
