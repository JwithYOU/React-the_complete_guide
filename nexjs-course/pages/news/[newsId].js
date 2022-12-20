import { Fragment } from "react";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <Fragment>
      <h1>Detail Page</h1>
      <p>{newsId}</p>
    </Fragment>
  );
}

export default DetailPage;
