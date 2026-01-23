/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // Prevent ChunkLoadError timeouts on slow dev compilation (common on WSL + /mnt drives).
    config.output.chunkLoadTimeout = 300000
    return config
  },
  images: {
    unoptimized: true,
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
  },
}

module.exports = nextConfig
