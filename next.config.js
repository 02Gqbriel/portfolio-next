/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	crossOrigin: 'use-credentials',
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/:path*',
				headers: { key: 'Access-Control-Allow-Origin', value: '*' },
			},
		];
	},
};

module.exports = nextConfig;
