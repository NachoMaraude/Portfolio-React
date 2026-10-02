"use client";

import { useEffect, useState } from "react";

// Persiste entre navegaciones del cliente: la entrada solo corre en la primera carga.
let played = false;

export default function HeroContent({ children }) {
  const [animate] = useState(() => !played);

  useEffect(() => {
    played = true;
  }, []);

  return (
    <div
      data-hero={animate ? "on" : "off"}
      className="relative z-10 max-w-3xl mx-auto px-6"
    >
      {children}
    </div>
  );
}
