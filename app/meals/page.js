import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1 style={{color: 'white', textAlign: 'center'}}>Meals Page</h1>
      <p style={{textAlign: 'center'}}>
        <Link href="/meals/share"> Share </Link>
      </p>
      <h2 style={{color: 'white', textAlign: 'center'}}>Meals Pages</h2>
      <p style={{textAlign: 'center'}}>
        <Link href="/meals/meal-1">Meal page 1</Link>
      </p>
      <p style={{textAlign: 'center'}}>
        <Link href="/meals/meal-2">Meal page 2</Link>
      </p>
      <p style={{textAlign: 'center'}}>
        <Link href="/meals/meal-3">Meal page 3</Link>
      </p>
      <p style={{textAlign: 'center'}}><Link href="../">Back</Link></p>

    </main>
  )
}