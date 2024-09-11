import NewsLinks from "@/components/news-links";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News Page</h2>
      <NewsLinks news={latestNews} />
    </>
  );
}
