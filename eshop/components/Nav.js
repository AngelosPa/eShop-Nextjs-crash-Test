import React from "react";
import Link from "next/link";

import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.navList}>
        <li className={navStyles.navItem}>
          <Link href="/" className={navStyles.navLink}>
            Home
          </Link>
        </li>
        <li className={navStyles.navItem}>
          <Link href="/shop" className={navStyles.navLink}>
          Shop
          </Link>
        </li>
        <li className={navStyles.navItem}>
          <Link href="/deliever" className={navStyles.navLink}>
            We deliever to:
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
