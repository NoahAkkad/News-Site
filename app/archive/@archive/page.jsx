import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((links) => (
            <li key={links}>
              <Link href={`/archive/${links}`}>{links}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
