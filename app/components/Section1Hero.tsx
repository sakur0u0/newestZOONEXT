"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section1Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background text animation
      const bgTexts = gsap.utils.toArray('.bg-text');
      
      bgTexts.forEach((text: any, i) => {
        gsap.to(text, {
          xPercent: -100,
          ease: "none",
          duration: 20,
          repeat: -1,
          delay: i * 10
        });
      });

      // Glitch effect on main heading
      const glitchTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
      });

      glitchTimeline
        .to(".main-text", {
          skewX: 70,
          duration: 0.1,
        })
        .to(".main-text", {
          skewX: 0,
          duration: 0.1,
        })
        .to(".main-text", {
          opacity: 0,
          duration: 0.1,
        })
        .to(".main-text", {
          opacity: 1,
          duration: 0.1,
        });

      // Fade in animation for content
      gsap.from(".content-fade", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      {/* Background text layers */}
      <div className="absolute inset-0 flex flex-col justify-between py-20">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative flex whitespace-nowrap opacity-30">
            <div className="bg-text animate-marquee text-[15vw] font-bold tracking-tighter text-gray-400">
              ZOOO ZOOO ZOOO ZOOO ZOOO
            </div>
            <div className="bg-text animate-marquee text-[15vw] font-bold tracking-tighter text-gray-400">
              ZOOO ZOOO ZOOO ZOOO ZOOO
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1
          ref={textRef}
          className="main-text relative mb-8 text-[12vw] font-bold text-white mix-blend-difference"
        >
          ZOONEXT
        </h1>
        <div className="max-w-3xl text-center">
          <h2 className="content-fade mb-6 text-4xl font-bold text-white">
            From Origin to Zenith
          </h2>
          <p className="content-fade mb-12 text-lg text-gray-300">
            挑戦の原点となり、成長を支援し、無限の可能性を共に切り拓く。ZOONEXTは未来を創造するあなたのパートナーです。
          </p>
          <div className="content-fade flex justify-center space-x-6">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-200">
              今すぐお問い合わせ
            </button>
            <button className="rounded-full border border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white/10">
              私たちのミッションを見る
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}