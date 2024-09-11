import { DUMMY_NEWS } from "@/dummy-news";
import NewsLinks from "@/components/news-links";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsLinks news={DUMMY_NEWS} />
    </>
  );
}
