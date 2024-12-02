"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section122() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 2, // スクラブの値を大きくしてスムーズに
          ease: "power1.inOut", // イージングを追加
          smoothTooltip: true, // ツールチップをスムーズに
        },
      });

      // メインのアニメーション
      tl.from(textRef.current, {
        opacity: 0,
        scale: 0.8,
        textShadow: "0 0 10px rgba(72, 255, 167, 0.4), 0 0 20px rgba(72, 255, 167, 0.2), 0 0 30px rgba(72, 255, 167, 0.1)",
        duration: 1.5, // durationを長く
        ease: "power2.out", // イージングを追加
      })
      .to(textRef.current, {
        scale: 4,
        opacity: 1,
        textShadow: "0 0 30px rgba(72, 255, 167, 0.9), 0 0 60px rgba(72, 255, 167, 0.8), 0 0 90px rgba(72, 255, 167, 0.7), 0 0 120px rgba(72, 255, 167, 0.6)",
        duration: 2, // durationを長く
        ease: "power1.inOut", // イージングをよりスムーズに
      });

      // 背景のグラデーション遷移
      tl.fromTo(overlayRef.current, 
        {
          opacity: 0,
          y: "100%",
        },
        {
          opacity: 1,
          y: "0%",
          duration: 2, // durationを長く
          ease: "power1.inOut", // イージングを追加
        },
        "<"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* グラデーション背景オーバーレイ */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-white via-gray-100/90 to-transparent"
        style={{ transform: 'translateY(100%)', opacity: 0 }}
      />
      
      {/* ネオンテキスト */}
      <h2
        ref={textRef}
        className="relative z-10 text-[15vw] font-black tracking-tighter transform-gpu" // transform-gpuを追加
        style={{ 
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#4FFFA7",
          textShadow: "0 0 30px rgba(72, 255, 167, 0.8), 0 0 60px rgba(72, 255, 167, 0.6), 0 0 90px rgba(72, 255, 167, 0.4)",
          willChange: "transform", // パフォーマンス最適化
        }}
      >
        NEXT
      </h2>
    </div>
  );
}