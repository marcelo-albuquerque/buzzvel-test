import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.avaaatars.com",
			},
		],
	},
};

export default nextConfig;
