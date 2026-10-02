"use client";

import { Link } from "react-scroll";

export default function ScrollLink({ to, ...props }) {
  // El href real hace que el enlace sea enfocable y operable con teclado.
  return <Link to={to} href={`#${to}`} {...props} />;
}
