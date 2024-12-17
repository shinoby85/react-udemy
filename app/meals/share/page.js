import Link from "next/link";

export default function SharePage() {
  return (
    <main>
      <h1 style={{color: 'white', textAlign: 'center'}}>Share Page</h1>
      <p style={{textAlign: 'center'}}><Link href="../">Back</Link></p>
    </main>
  );
}