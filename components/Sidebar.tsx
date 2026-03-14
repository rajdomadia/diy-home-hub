import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";
import { getAllArticles, getRecentArticles } from "@/lib/articles";
import CategoryIcon from "@/components/CategoryIcon";

export default function Sidebar() {
  const allArticles = getAllArticles();
  const recentArticles = getRecentArticles(5);

  const categoryCounts: Record<string, number> = {};
  for (const cat of CATEGORIES) {
    categoryCounts[cat.slug] = allArticles.filter(
      (a) => a.categorySlug === cat.slug
    ).length;
  }

  return (
    <aside className="space-y-6">
      <div className="rounded-3xl border border-zinc-100 bg-white p-7">
        <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">
          Categories
        </h3>
        <ul className="mt-5 space-y-3.5">
          {CATEGORIES.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className="group flex items-center justify-between text-zinc-500 transition-colors duration-300 hover:text-[var(--color-accent)]"
              >
                <span className="flex items-center gap-2">
                  <CategoryIcon slug={cat.slug} className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {cat.name}
                  </span>
                </span>
                <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-xs text-zinc-300">
                  {categoryCounts[cat.slug] || 0}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-zinc-100 bg-white p-7">
        <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-300">
          Recent Articles
        </h3>
        <ul className="mt-5 space-y-5">
          {recentArticles.map((article) => (
            <li key={article.slug}>
              <Link href={`/blog/${article.slug}`} className="group block">
                <p className="line-clamp-2 text-sm font-medium text-zinc-600 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {article.title}
                </p>
                <time className="mt-1.5 block text-xs text-zinc-300">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 p-7 text-center">
        <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-2xl" />
        <div className="relative">
          <p className="text-2xl">&#x1F4EC;</p>
          <h3 className="mt-3 text-base font-medium text-white">
            Stay Updated
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Get the latest DIY tips delivered to your inbox.
          </p>
          <Link
            href="/#newsletter"
            className="mt-5 inline-block rounded-2xl bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--color-accent-light)]"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </aside>
  );
}
