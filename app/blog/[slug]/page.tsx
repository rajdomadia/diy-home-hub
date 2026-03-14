import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { SITE_NAME, SITE_URL, CATEGORIES } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareButtons from "@/components/ShareButtons";
import ArticleCard from "@/components/ArticleCard";
import YouTube from "@/components/YouTube";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      url: `${SITE_URL}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const category = CATEGORIES.find((c) => c.slug === article.categorySlug);
  const relatedArticles = getRelatedArticles(slug, article.categorySlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            ...(category
              ? [{ name: category.name, href: `/category/${category.slug}` }]
              : []),
            { name: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12">
          {category && (
            <span className="inline-block rounded-full bg-zinc-100 px-3.5 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
              {category.name}
            </span>
          )}
          <h1 className="mt-5 text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            {article.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-300">
            <span className="font-medium text-zinc-500">{article.author}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-200" />
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="h-1 w-1 rounded-full bg-zinc-200" />
            <span>{article.readingTime}</span>
          </div>
        </header>

        {/* Feature Image */}
        {article.image && !article.image.includes("placeholder") && (
          <div className="relative mb-14 aspect-[2/1] overflow-hidden rounded-3xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose max-w-none">
          <MDXRemote source={article.content} components={{ YouTube }} />
        </div>

        {/* Share & Tags */}
        <div className="mt-14 border-t border-zinc-100 pt-10">
          <ShareButtons title={article.title} slug={article.slug} />
          {article.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-50 px-3.5 py-1 text-xs font-medium text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-24">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Keep reading
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-zinc-900">
              Related Articles
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
