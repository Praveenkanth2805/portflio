/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For static export if needed
  },
  // Enable if you want static export
  // output: 'export',
  // trailingSlash: true,
  
  // For better performance
  compress: true,
  swcMinify: true,
  
  // Environment variables that should be available at build time
  env: {
    // Add any build-time env vars here
  },
  
  // Allow CORS if needed for API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;