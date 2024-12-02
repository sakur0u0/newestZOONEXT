"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

export default function Section3Content() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // コンテンツのアニメーション（変更なし）
      gsap.from(".content-text", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });

      gsap.from(".content-image", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      });

      // 背景色のトランジション（白→よりライトなグレー）
      gsap.fromTo(
        sectionRef.current,
        {
          backgroundColor: "#ffffff",
        },
        {
          backgroundColor: "#BFBFBF", // より明るいグレー（#808080と#FFFFFFの中間）
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            markers: true, // 開発時のみ表示（本番では削除）
          },
        }
      );

      // テキストの色変更（変更なし）
      gsap.fromTo(
        ".color-transition",
        {
          color: "#000000",
        },
        {
          color: "#ffffff",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen bg-white py-20 transition-colors duration-500"
    >
      {/* 残りのコンポーネントは変更なし */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-2">
        <div className="content-text flex flex-col justify-center space-y-6">
          <h2 className="color-transition text-5xl font-bold">
            Creating a Future Beyond Limits
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="color-transition mb-2 text-2xl font-semibold">
                ビジョン
              </h3>
              <p className="color-transition text-xl">
                「原点から無限へ、新しい未来を創る」
              </p>
              <p className="color-transition mt-2">
                ZOONEXTは、すべての挑戦と創造の出発点として、社会に革新と調和をもたらします。個人や組織が自らの限界を超え、長期的な発展を実現する場を提供します。
              </p>
            </div>
            <div>
              <h3 className="color-transition mb-2 text-2xl font-semibold">
                ミッション
              </h3>
              <ul className="color-transition space-y-2">
                <li>• Origin to Zenith: 原点から頂点を目指す旅をサポートする。</li>
                <li>• Infinite Opportunities: 成長と成功のための無限の機会を創出する。</li>
                <li>• The Oneness: 共創と調和を通じて、新しい価値を共に生み出す。</li>
              </ul>
            </div>
          </div>
          <button className="w-fit rounded-full bg-black px-8 py-3 text-white transition-all hover:bg-gray-800">
            ZOONEXTのビジョンに共感する
          </button>
        </div>
        <div className="content-image relative h-[600px] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}