"use client";
import { useRef } from "react";
import { Card } from "./Card";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    const cards = cardRefs.current;
    const totalScrollHeight = window.innerHeight * 3;
    const position = [14, 38, 62, 86];
    const rotation = [-15, -7.5, 7.5, 15];

    // Pin the cards section
    ScrollTrigger.create({
      trigger: container.current.querySelector(".cards"),
      start: "top top",
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // Spread cards on scroll
    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${position[index]}%`,
        rotation: `${rotation[index]}`,
        ease: "none",
        scrollTrigger: {
          trigger: container.current.querySelector(".cards"),
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`,
        },
      });
    });

    // Flip cards on scroll
    cards.forEach((card, index) => {
      const innerEl = card.querySelector(".flip-card-inner");
      const staggerOffset = index * 0.05;
      const startOffset = 1 / 3 + staggerOffset;
      const endOffset = 2 / 3 + staggerOffset;

      ScrollTrigger.create({
        trigger: container.current.querySelector(".cards"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const flipRotation = 180 * animationProgress;
            const cardRotation = rotation[index] * (1 - animationProgress);

            gsap.to(innerEl, {
              rotateY: flipRotation,
              ease: "power1.out",
            });

            gsap.to(card, {
              xPercent: -50,
              yPercent: -50,
              rotate: cardRotation,
              ease: "power1.out",
            });
          }
        },
      });
    });
  }, { scope: container });

  return (
    <ReactLenis root>
      <div className="container" ref={container}>
        <section className="hero">
          <h1>Scroll slowly to reveal cards</h1>
        </section>
        <section className="cards">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc="/card-front.jpg"
              frontAlt="Card Image"
              backText="Back"
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>
        <section className="footer">
          <h1>Footer/Section</h1>
        </section>
      </div>
    </ReactLenis>
  );
}
