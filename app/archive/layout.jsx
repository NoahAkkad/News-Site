export default function ArchiveLayout({ archive, latest }) {
    return (
    <div>
        <h1>News Archive</h1>
        <section id="archive-filter">
            {archive}
        </section>
        <h1>Latest News</h1>
        <section id="latest-news">
            {latest}
        </section>
    </div>
    )
}