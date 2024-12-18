import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="A plate with food on it"/>
        Next level food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li><Link href="/meals">Browse meals</Link></li>
          <li><Link href="/community">Foodies community</Link></li>
        </ul>
      </nav>
    </header>
  );
}