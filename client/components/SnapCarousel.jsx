"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { prefersReducedMotion } from "@/lib/motion";

const arrowClass =
  "press absolute inset-y-0 z-10 w-10 flex items-center justify-center opacity-40 hover-fine:opacity-90 hover-fine:bg-black/20 focus-visible:opacity-100 focus-visible:outline-offset-[-2px]";

export default function SnapCarousel({
  images,
  getAlt,
  sizes,
  heightClass,
  fit = "cover",
  eagerFirst = false,
  labels,
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    const track = trackRef.current;
    const slides = [...track.children];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIndex(slides.indexOf(entry.target));
        });
      },
      { root: track, threshold: 0.6 },
    );
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [count]);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      const target = (i + count) % count;
      track.scrollTo({
        left: track.clientWidth * target,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    },
    [count],
  );

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={labels.group}
      className={`relative overflow-hidden ${heightClass}`}
    >
      <ul
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex h-full overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <li
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} / ${count}`}
            className="h-full w-full shrink-0 snap-center"
          >
            <Image
              src={img}
              alt={getAlt(i)}
              sizes={sizes}
              loading={eagerFirst && i === 0 ? "eager" : "lazy"}
              // Bajo el pliegue: eager pero sin competir con el LCP ni disparar el preload automático.
              fetchPriority={eagerFirst && i === 0 ? "low" : undefined}
              draggable={false}
              className={`h-full w-full ${
                fit === "contain"
                  ? "object-contain bg-[#0d1117]"
                  : "object-cover"
              }`}
            />
          </li>
        ))}
      </ul>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={labels.prev}
            onClick={() => goTo(index - 1)}
            className={`${arrowClass} left-0`}
          >
            <span className="block h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-white" />
          </button>
          <button
            type="button"
            aria-label={labels.next}
            onClick={() => goTo(index + 1)}
            className={`${arrowClass} right-0`}
          >
            <span className="block h-0 w-0 border-y-8 border-l-8 border-y-transparent border-l-white" />
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                aria-label={labels.dot(i + 1)}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
                className="press pointer-events-auto grid h-10 w-10 place-items-center"
              >
                <span
                  className={`block h-2 w-2 rounded-full bg-white transition-opacity duration-160 ease-snappy ${
                    i === index ? "opacity-100" : "opacity-40"
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
