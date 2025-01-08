import {useRouter} from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <>
      <h1>The Detail page</h1>
      {newsId && <p>ID: {newsId}</p>}
    </>
  )
}