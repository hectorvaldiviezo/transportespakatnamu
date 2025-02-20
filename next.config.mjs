/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    images: {
        domains: ["milla.grupopakatnamu.com"],
    },
};

export default nextConfig;
