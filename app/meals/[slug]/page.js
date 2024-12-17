import Link from "next/link";

export default function MealDetailsPage({params}) {
  return (
    <main>
      <h1 style={{color: 'white', textAlign: 'center'}}>Meal Details Page</h1>
      <p style={{textAlign: 'center'}}>{params.slug}</p>
      <p style={{textAlign: 'center'}}><Link href="../">Back</Link></p>
    </main>
  );
}