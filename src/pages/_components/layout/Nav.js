import React, { useLayoutEffect, useRef } from "react";
import styles from "src/styles/layout/nav.module.css";
import { Antonio } from "@next/font/google";
import Link from "next/link";
import gsap from "gsap";
const antonio = Antonio({
  subsets: ["latin"],
  variable: "--antonio",
});

function Nav({ textRef, navRef }) {
  return (
    <nav ref={navRef} className={`${styles.nav} ${antonio.variable}`}>
      <ul>
        <li>
          <Link href="/">
            <span
              ref={(el) => {
                textRef.current[0] = el;
              }}
            >
              HOME
            </span>
          </Link>
        </li>
        <li>
          <Link href="/About" as="about">
            <span
              ref={(el) => {
                textRef.current[1] = el;
              }}
            >
              ABOUT
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Projects" as="projects">
            <span
              ref={(el) => {
                textRef.current[2] = el;
              }}
            >
              PROJECTS
            </span>
          </Link>
        </li>
        <li>
          <Link href="/Contact" as="contact">
            <span
              ref={(el) => {
                textRef.current[3] = el;
              }}
            >
              CONTACT
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
