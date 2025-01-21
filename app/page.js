import UsePromiseDemo from "@/components/UsePromisesDemo";
import fs from "node:fs/promises";
import {Suspense} from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  const usersPromise = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data);
      // resolve(users);
      reject(new Error('Error!'));
    }, 2000)

  })

  return (
    <main>
      {/*<RSCDemo/>*/}
      {/*<ClientDemo>*/}
      {/*  <RSCDemo/>*/}
      {/*</ClientDemo>*/}
      {/*<DataFetchingDemo/>*/}
      <ErrorBoundary fallback={<p>Something wrong...</p>}>
        <Suspense fallback={<p>Loading data...</p>}>
          <UsePromiseDemo usersPromise={usersPromise}/>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
