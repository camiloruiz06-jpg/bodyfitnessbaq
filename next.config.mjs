/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permite las imágenes que suben al panel (Sanity)
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
