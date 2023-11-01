/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  env: {
    siteTitle: "Aura Editor",
    siteDescription: "Cross Platform PDF editor rich with features.",
    siteKeywords: "PDF Editor Cross-Platform Mac Windows Linux",
    siteUrl: "https://auraedit.com",
    siteImagePreviewUrl: "/src/images/preview.png",
  },
  images: { unoptimized: true },
};

export default nextConfig;
