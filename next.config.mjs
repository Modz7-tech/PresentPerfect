/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep icon imports tree-shakeable and avoid bundling the entire icon package.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Next's default webpack filesystem cache remains enabled for repeat builds.
  // Do not add custom loaders or transpilePackages unless the project needs them.
};

export default nextConfig;
