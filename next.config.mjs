/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "d3jvrzwyyojgwe.cloudfront.net",
                port: "",
                pathname:"/**"
            },
            {
                protocol: 'https',
                hostname: "d3tpz8spx1fgy0.cloudfront.net",
                port: "",
                pathname:"/**"
            }
        ]
    }
};

export default nextConfig;
