import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li><Link href="/news/first-page">First link</Link></li>
        <li><Link href="/news/second-page">Second link</Link></li>
        <li><Link href="/news/third-page">Third link</Link></li>
      </ul>
    </>
  )
}