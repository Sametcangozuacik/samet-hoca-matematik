"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SplitText({
  text = "", // default boş string
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars", // "chars" veya "words"
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "0px",
  textAlign = "left",
  onLetterAnimationComplete,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll("span"));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(elements, from, {
              ...to,
              duration,
              ease,
              stagger: delay / 1000, // ms -> sn
              onComplete: () => {
                if (onLetterAnimationComplete) onLetterAnimationComplete();
              },
            });
            observer.unobserve(container);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  // metni harf veya kelime bazlı böl
  const splitText = () => {
    if (!text) return null;

    if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span key={index} className="inline-block mr-1">
          {word}
        </span>
      ));
    }

    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={className} style={{ textAlign }}>
      {splitText()}
    </div>
  );
}
