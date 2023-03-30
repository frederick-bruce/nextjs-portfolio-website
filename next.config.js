/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;

module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	}
};