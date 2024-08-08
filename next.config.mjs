import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "backend.fi-group.es",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
        // domains: ["res.cloudinary.com"],
    },
};

export default withNextIntl(nextConfig);
