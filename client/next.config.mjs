/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { inlineCss: true },
  // Hay un package-lock.json suelto en la raíz del repo; fija la raíz al directorio client.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
