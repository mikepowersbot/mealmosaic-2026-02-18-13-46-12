import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  turbopack: {
    root: ".",
  },
};

export default nextConfig;