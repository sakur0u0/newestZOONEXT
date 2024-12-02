"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section2Transition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 背景色のトランジション
      gsap.fromTo(
        bgRef.current,
        { backgroundColor: "#000" },
        {
          backgroundColor: "#fff",
          duration: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // テキストカラーのトランジション
      gsap.fromTo(
        ".dynamic-text",
        { color: "#fff" },
        {
          color: "#000",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // コンテンツのアニメーション
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      });

      // カードのアニメーション
      gsap.from(".concept-card", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".concept-grid",
          start: "top 70%",
          end: "top 50%",
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen">
      <div ref={bgRef} className="absolute inset-0 w-full h-full" />
      
      <div ref={contentRef} className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        {/* ヘッダーセクション */}
        <div className="mb-24 text-center">
          <h2 className="dynamic-text mb-8 text-[76px] font-medium leading-tight tracking-tight">
            <span className="block">Origin. Zenith.</span>
            <span className="block">Infinity. Oneness.</span>
          </h2>
          <p className="dynamic-text mx-auto max-w-3xl text-2xl font-light leading-relaxed opacity-90">
            ZOONEXTは、すべての挑戦が始まる「原点」を提供し、目指すべき「頂点」をサポートします。
            その先の「無限の可能性」を共に探求し、「一体感」を通じて持続可能な価値を創造します。
          </p>
        </div>

        {/* コンセプトグリッド */}
        <div className="concept-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="concept-card p-8">
            <h3 className="dynamic-text text-3xl font-medium mb-2">Origin</h3>
            <p className="dynamic-text text-lg opacity-80">挑戦の原点から、新たなステージへ</p>
          </div>
          <div className="concept-card p-8">
            <h3 className="dynamic-text text-3xl font-medium mb-2">Zenith</h3>
            <p className="dynamic-text text-lg opacity-80">共に目指す、最高の高みへ</p>
          </div>
          <div className="concept-card p-8">
            <h3 className="dynamic-text text-3xl font-medium mb-2">Infinity</h3>
            <p className="dynamic-text text-lg opacity-80">無限の可能性を、現実のものに</p>
          </div>
          <div className="concept-card p-8">
            <h3 className="dynamic-text text-3xl font-medium mb-2">Oneness</h3>
            <p className="dynamic-text text-lg opacity-80">調和の中で、価値を創造する</p>
          </div>
        </div>

        {/* ミッションセクション */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="dynamic-text text-5xl font-medium mb-8">Our Mission</h2>
            <p className="dynamic-text text-xl opacity-80 max-w-4xl mx-auto">
              ZOONEXTの使命は、以下の3つの柱で成り立っています。
            </p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-3">
            <div className="mission-item">
              <h3 className="dynamic-text text-2xl font-medium mb-4">
                Origin to Zenith
                <span className="block text-lg opacity-80 mt-1">原点から頂点へ</span>
              </h3>
              <p className="dynamic-text opacity-70">
                個人や組織が挑戦を始める「原点」を提供し、目指すべき「頂点」への旅を支援します。
              </p>
            </div>

            <div className="mission-item">
              <h3 className="dynamic-text text-2xl font-medium mb-4">
                Infinite Opportunities
                <span className="block text-lg opacity-80 mt-1">無限の機会</span>
              </h3>
              <p className="dynamic-text opacity-70">
                あらゆる挑戦を可能性に変え、長期的な成長を支える基盤を構築します。
              </p>
            </div>

            <div className="mission-item">
              <h3 className="dynamic-text text-2xl font-medium mb-4">
                The Oneness
                <span className="block text-lg opacity-80 mt-1">調和と共創</span>
              </h3>
              <p className="dynamic-text opacity-70">
                パートナーや社会と一体となり、新しい価値を創造する共創の場を提供します。
              </p>
            </div>
          </div>

          <p className="dynamic-text text-center mt-16 text-lg opacity-80 max-w-4xl mx-auto">
            この3つの柱は、私たちが日々の活動の中で実現するべき目標であり、社会やお客様に対する約束です。
          </p>
        </div>
      </div>
    </div>
  );
}