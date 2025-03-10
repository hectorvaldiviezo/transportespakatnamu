/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'milla.grupopakatnamu.com',
                pathname: '**'
            }
        ]
    },
};

export default nextConfig;
