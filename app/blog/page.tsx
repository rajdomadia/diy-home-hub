import { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog - All DIY Articles & Guides",
  description:
    "Browse our complete collection of DIY home improvement, crafts, and gardening articles with step-by-step instructions.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <Breadcrumbs items={[{ name: "Blog" }]} />

      <div className="mb-14">
        <h1 className="text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl">
          All Articles
        </h1>
        <p className="mt-3 text-zinc-400">
          Explore our complete library of DIY guides and tutorials
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
        <div>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-400">No articles found.</p>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
