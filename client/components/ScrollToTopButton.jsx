"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { prefersReducedMotion } from "@/lib/motion";

export default function ScrollToTopButton({ label }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      inert={!visible}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        })
      }
      className={`press fixed bottom-6 right-6 z-40 grid h-10 w-10 place-items-center rounded-lg border border-[#2d3555] bg-[#161b2e] text-[#90a0d9] ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <FiArrowUp size={14} aria-hidden="true" />
    </button>
  );
}
