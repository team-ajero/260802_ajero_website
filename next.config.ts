import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 실제 고객 프로젝트 이미지가 준비되기 전까지 Demo Project 시드 데이터에서
    // 플레이스홀더 이미지(picsum.photos)를 사용한다.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
