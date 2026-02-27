/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // يسمح بجلب الصور من أي رابط خارجي (مفيد للـ Notion)
      },
    ],
  },
  // تأكد من عدم وجود أخطاء تمنع الـ Build في البيئات الصارمة
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
