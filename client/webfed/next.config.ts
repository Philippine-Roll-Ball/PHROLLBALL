import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  transpilePackages: [
    "@repo/ui-web",
    "@repo/utils",
    "@repo/theme",
    "@repo/tailwind-config",
  ],
};

export default nextConfig;