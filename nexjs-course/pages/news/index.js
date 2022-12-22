import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href="news/good-news">good-news</a>
        </li>
        <li>
          <Link href="news/bad-news">bad-news</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
