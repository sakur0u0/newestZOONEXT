"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section5NightSafari() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Neon text glow animation
      gsap.to(".neon-text", {
        textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        repeat: -1,
        yoyo: true,
        duration: 2,
      });

      // Card hover effect
      gsap.utils.toArray(".feature-card").forEach((card: any) => {
        gsap.to(card, {
          boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
          scale: 1.02,
          duration: 0.3,
          paused: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black py-20"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <h2 className="neon-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-center text-7xl font-bold text-transparent">
              Discover the Light Beyond Darkness
            </h2>
            <div className="mx-auto mt-2 h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
          <p className="mt-6 max-w-2xl text-center text-xl leading-relaxed text-gray-200">
            ZOONEXTは、暗闇の中に隠された可能性を探求し、新しい価値を見出すパートナーです。私たちの事業は、未知の領域を切り拓き、挑戦を成功に変えるプロセスを支援します。
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 text-center">
          <h3 className="mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent">
            Empowering Growth, Creativity, and Experiences
          </h3>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200">
            ZOONEXTは、「挑戦と成長を支援する」ことを使命とし、以下の3つの事業ドメインで未来を創造しています。それぞれの事業が持つ特徴と価値を活かし、日常から未来へと続く特別な体験を提供します。
          </p>
        </div>

        {/* Business Domains */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Lifestyle & Brand Experience */}
          <div className="feature-card group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm transition-all hover:border-white/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity group-hover:opacity-20"></div>
            <h3 className="mb-4 text-2xl font-bold text-white">ライフスタイル＆ブランドエクスペリエンス</h3>
            <p className="mb-4 text-gray-200">日常に特別なひとときを創り出す事業です。</p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>飲食店運営: 高級感と親しみやすさを融合させた空間デザインと料理体験を提供</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>イベント企画・運営: 展示会、ポップアップ、ブランド体験型イベントの創出</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>ブランドキャンペーン: 戦略的プロモーションの展開</span>
              </li>
            </ul>
          </div>

          {/* Entertainment & Creative */}
          <div className="feature-card group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm transition-all hover:border-white/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 blur-xl transition-opacity group-hover:opacity-20"></div>
            <h3 className="mb-4 text-2xl font-bold text-white">エンターテイメント＆クリエイティブ</h3>
            <p className="mb-4 text-gray-200">創造力とテクノロジーを駆使した革新的な体験を提供します。</p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>映像制作: ブランドの魅力をビジュアルで表現</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>デザイン制作: UI/UX、グラフィックデザイン、ブランディング</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>メタバース＆AR/VR: 没入型デジタル体験の提供</span>
              </li>
            </ul>
          </div>

          {/* Empowerment & Innovation */}
          <div className="feature-card group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm transition-all hover:border-white/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity group-hover:opacity-20"></div>
            <h3 className="mb-4 text-2xl font-bold text-white">エンパワーメント＆イノベーション</h3>
            <p className="mb-4 text-gray-200">個人と企業の可能性を最大化し、新しい未来を共創します。</p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>スタートアップ支援: 資金調達や事業計画の策定サポート</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>DX・AI企画開発: 最新テクノロジー導入支援</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-400">•</span>
                <span>サステナブルビジネスモデル: 社会的価値の創出</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a href="#" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600">
            ZOONEXTが提供する未来へのソリューションをさらに詳しく見る
            <svg className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}