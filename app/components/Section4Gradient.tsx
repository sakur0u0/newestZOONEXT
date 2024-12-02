"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section4Gradient() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        backgroundImage: "linear-gradient(to bottom, white, black)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Fade in animation for content
      gsap.from(".content-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-20"
    >
      <div className="max-w-4xl text-center">
        <h2 className="mb-12 text-6xl font-bold mix-blend-difference text-white">
          From Challenges to Achievements
        </h2>
        <div className="content-item mb-16 text-lg text-gray-600">
          <p className="mb-8">
            ZOONEXTは、これまでに多くの挑戦を経て新しい価値を生み出してきました。これらの経験を基盤に、さらなる未来を築いていきます。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="content-item space-y-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white">これまでの成功事例</h3>
            <ul className="space-y-3 text-left text-gray-300">
              <li>• プレミアムイベントの企画・運営</li>
              <li>• 次世代テクノロジーを活用したクリエイティブ制作</li>
              <li>• スタートアップ支援と独立支援プロジェクト</li>
            </ul>
          </div>

          <div className="content-item space-y-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white">未来への挑戦</h3>
            <ul className="space-y-3 text-left text-gray-300">
              <li>• AIとDXを駆使した革新的なビジネスモデルの構築</li>
              <li>• 持続可能な社会を目指すソリューションの開発</li>
              <li>• 地域とグローバルをつなぐプラットフォームの構築</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}