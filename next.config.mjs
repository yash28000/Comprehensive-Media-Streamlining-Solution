/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "d32xvyoorsee81.cloudfront.net",
                port: "",
                pathname:"/**"
            },
            {
                protocol: 'https',
                hostname: "d3tpz8spx1fgy0.cloudfront.net",
                port: "",
                pathname:"/**"
            },
            {
                protocol: 'https',
                hostname: "demqgnok2z25n.cloudfront.net",
                port: "",
                pathname:"/**"
            }
        ]
    }
};

export default nextConfig;
