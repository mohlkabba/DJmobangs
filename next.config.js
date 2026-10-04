/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  // Printed Tapin2Review units point at this site. They are handled by the separate
  // Tapin2Review project; these must stay temporary (307) so the target can change.
  async redirects() {
    return [
      { source: "/s/:id", destination: "https://tapin2review.vercel.app/s/:id", permanent: false },
      { source: "/p/:id", destination: "https://tapin2review.vercel.app/p/:id", permanent: false },
    ];
  },
};

module.exports = nextConfig;
