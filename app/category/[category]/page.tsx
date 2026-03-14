import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/lib/constants";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CategoryIcon from "@/components/CategoryIcon";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} - DIY Guides & Tutorials`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) notFound();

  const articles = getArticlesByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <Breadcrumbs items={[{ name: category.name }]} />

      <div className="mb-14">
        <div className="flex items-center gap-4">
          <CategoryIcon slug={category.slug} className="h-9 w-9 text-[var(--color-accent)]" />
          <h1 className="text-4xl font-light tracking-tight text-zinc-900 sm:text-5xl">
            {category.name}
          </h1>
        </div>
        <p className="mt-4 max-w-2xl text-zinc-400">
          {category.description}
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
            <p className="text-zinc-400">
              No articles in this category yet. Check back soon!
            </p>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
