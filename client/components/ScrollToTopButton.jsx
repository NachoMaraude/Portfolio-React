"use client";

import ScrollToTop from "react-scroll-to-top";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop
      color="#90a0d9"
      width="14px"
      height="14px"
      style={{
        backgroundColor: "#161b2e",
        border: "1px solid #2d3555",
        borderRadius: "8px",
        padding: "12px",
        bottom: "24px",
        right: "24px",
      }}
    />
  );
}
