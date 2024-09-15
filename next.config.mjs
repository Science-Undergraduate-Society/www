/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://susubc.org',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
