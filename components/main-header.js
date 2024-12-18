import Link from "next/link";
import logoImg from "@/assets/logo.png"

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it"/>
        Next level food
      </Link>
      <nav>
        <ul>
          <li><Link href="/meals">Browse meals</Link></li>
          <li><Link href="/community">Foodies community</Link></li>
        </ul>
      </nav>
    </header>
  );
}