import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/articles";
import CategoryIcon from "@/components/CategoryIcon";

const categoryGradients: Record<string, string> = {
  "home-projects": "from-zinc-200 to-zinc-300",
  crafts: "from-zinc-100 to-zinc-200",
  gardening: "from-zinc-200 to-zinc-300",
};

export default function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const { title, description, category, categorySlug, date, readTime, slug, image } =
    article;
  const gradient =
    categoryGradients[categorySlug] || "from-zinc-200 to-zinc-300";
  const hasImage = image && !image.includes("placeholder");

  return (
    <article
      className={`card-elevated group h-full overflow-hidden rounded-3xl border border-zinc-100 bg-white transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-200 ${
        featured ? "sm:grid sm:grid-cols-2" : "flex flex-col"
      }`}
    >
      <Link href={`/blog/${slug}`}>
        <div className={`relative overflow-hidden ${featured ? "h-full min-h-[280px]" : "h-56"}`}>
          {hasImage ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            />
          ) : (
            <div
              className={`flex h-full items-center justify-center bg-gradient-to-br ${gradient}`}
            >
              <CategoryIcon slug={categorySlug} className="h-12 w-12 text-zinc-400 opacity-60" />
            </div>
          )}
        </div>
      </Link>
      <div className={featured ? "flex flex-col justify-center p-8" : "flex flex-1 flex-col p-6"}>
        <Link href={`/category/${categorySlug}`}>
          <span className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600">
            {category}
          </span>
        </Link>
        <Link href={`/blog/${slug}`}>
          <h3
            className={`mt-3 line-clamp-2 font-medium leading-snug text-zinc-800 transition-colors duration-300 group-hover:text-[var(--color-accent)] ${
              featured ? "text-xl" : "text-base"
            }`}
          >
            {title}
          </h3>
        </Link>
        <p className={`mt-2 text-sm leading-relaxed text-zinc-400 ${featured ? "line-clamp-3" : "line-clamp-2"}`}>
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5 text-xs text-zinc-300">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span className="flex items-center gap-1">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {readTime}
          </span>
        </div>
      </div>
    </article>
  );
}
