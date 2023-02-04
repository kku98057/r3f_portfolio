import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import Nav from "./Nav";
import Image from "next/image";
import logo from "public/imgs/logo.png";
import styles from "src/styles/layout/header.module.css";
import Link from "next/link";
import gsap from "gsap";

function Header(props) {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu((prev) => !prev);
  };
  const textRef = useRef([]);
  const navRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      gsap.set(textRef.current, {
        xPercent: -50,
        opacity: 0,
      });
      tl.to(navRef.current, {
        clipPath: "circle(100% at 50% 50%)",
      }).to(textRef.current, {
        xPercent: 0,
        opacity: 1,
        stagger: {
          amount: 0.3,
        },
      });

      menu ? tl.play() : tl.reverse();
    }); //

    return; // cleanup
  }, [menu]); //

  return (
    <div>
      <header className={styles.header}>
        <div className={`${styles.container} container`}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                className={styles.logo_img}
                src={logo}
                width="100%"
                height="100%"
                alt="fluate_logo"
              ></Image>
            </Link>
          </div>
          <div className={styles.menuBtn} onClick={menuHandler}>
            <div
              className={`${styles.menubar} ${
                menu ? styles.menubar1_active : styles.menubar1
              } `}
            ></div>
            <div
              className={`${styles.menubar} ${
                menu ? styles.menubar2_active : styles.menubar2
              }`}
            ></div>
            <div
              className={`${styles.menubar} ${
                menu ? styles.menubar3_active : styles.menubar3
              }`}
            ></div>
          </div>
        </div>
      </header>
      <Nav navRef={navRef} textRef={textRef} />
    </div>
  );
}

export default Header;
