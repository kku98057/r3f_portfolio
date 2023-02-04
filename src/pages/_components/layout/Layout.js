import React from "react";
import styles from "src/styles/layout/layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
