import NewsLinks from "@/components/news-links";
import { getNewsForYear } from "@/lib/news";

export default function FilteredNewsPage({params}) {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear);
    return (
       <NewsLinks news={news} />
    );
}