"use client";
import { Card } from "./Card";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <div className="container">
          <section className="hero">
            <h1>Keep scrolling to reveal cards</h1>
          </section>
          <section className="cards">
            {[...Array(4)].map((_, index) => (
              <Card
                key={index}
                id={`card-${index + 1}`}
                frontSrc="/card-front.jpg"
                frontAlt="Card Image"
                backText="Back"
              />
            ))}
          </section>
          <section className="footer">
            <h1>Footer/Section</h1>
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
