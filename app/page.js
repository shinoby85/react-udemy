import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{color: 'white', textAlign: 'center'}}>
        Time to get started!
      </h1>
      <p style={{textAlign: 'center'}}><Link href="/meals">Meals page</Link></p>
      <p style={{textAlign: 'center'}}><Link href="/community">Community page</Link></p>
    </main>
  );
}
