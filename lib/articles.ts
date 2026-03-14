import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  author: string;
  readTime: string;
  readingTime: string;
  image: string;
  tags: string[];
  content: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

function getCategoryFolders(): string[] {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs.readdirSync(articlesDirectory).filter((item) => {
    return fs.statSync(path.join(articlesDirectory, item)).isDirectory();
  });
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function getAllArticles(): Article[] {
  const categories = getCategoryFolders();
  const articles: Article[] = [];

  for (const category of categories) {
    const categoryPath = path.join(articlesDirectory, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, "");
      const readTime = data.readTime || estimateReadTime(content);

      articles.push({
        slug,
        title: data.title || "",
        description: data.description || "",
        category: data.category || "",
        categorySlug: data.categorySlug || category,
        date: data.date || "",
        author: data.author || "DIY Home Hub Team",
        readTime,
        readingTime: readTime,
        image: data.image || "/images/placeholder.jpg",
        tags: data.tags || [],
        content,
      });
    }
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter(
    (article) => article.categorySlug === categorySlug
  );
}

export function getRecentArticles(count: number = 6): Article[] {
  return getAllArticles().slice(0, count);
}

export function getAllSlugs(): string[] {
  return getAllArticles().map((article) => article.slug);
}

export function getRelatedArticles(
  currentSlug: string,
  categorySlug?: string,
  count: number = 3
): Article[] {
  const catSlug =
    categorySlug || getArticleBySlug(currentSlug)?.categorySlug || "";
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug && a.categorySlug === catSlug)
    .slice(0, count);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return getAllArticles().filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );
}
