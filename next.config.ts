/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
    domains: ['avatars.githubusercontent.com'], // ✅ hier die Domain erlauben
  },
  }
  
  module.exports = nextConfig
