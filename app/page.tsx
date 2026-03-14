import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";
import { getRecentArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import AnimateIn from "@/components/AnimateIn";
import CategoryIcon from "@/components/CategoryIcon";

export default function HomePage() {
  const recentArticles = getRecentArticles(6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mesh-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-40">
          <AnimateIn direction="up" className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Step-by-step DIY guides
            </p>
            <h1 className="mt-6 text-4xl font-light tracking-tight text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl">
              Build It. Create It.{" "}
              <span className="font-semibold text-[var(--color-accent)]">
                Grow It.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Discover step-by-step DIY guides for home improvement, creative
              crafts, and gardening projects. From beginner-friendly to advanced.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/10"
              >
                Explore All Projects
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-zinc-200 px-8 py-3.5 text-sm font-medium text-zinc-600 transition-all duration-300 hover:border-zinc-300 hover:bg-white"
              >
                About Us
              </Link>
            </div>
          </AnimateIn>

          {/* Hero Image Composition */}
          <AnimateIn direction="up" delay={200} className="relative mt-16 hidden lg:block">
            <div className="relative h-[500px]">
              {/* Main image */}
              <div className="absolute top-0 right-0 h-[320px] w-[280px] overflow-hidden rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-900/5">
                <Image
                  src="/images/beginner-guide-macrame-wall-hangings.svg"
                  alt="Macrame wall hanging craft project"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute top-32 left-0 h-[260px] w-[240px] overflow-hidden rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-900/5">
                <Image
                  src="/images/growing-herbs-indoors-year-round.svg"
                  alt="Indoor herb garden"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Third image */}
              <div className="absolute right-8 bottom-0 h-[200px] w-[220px] overflow-hidden rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-900/5">
                <Image
                  src="/images/how-to-build-floating-shelf-reclaimed-wood.svg"
                  alt="Floating shelf home project"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative accent orb */}
              <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Browse by topic
            </p>
            <h2 className="mt-3 text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl">
              Explore Our Categories
            </h2>
          </AnimateIn>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-rows-2">
            {/* First category spans 2 rows for bento effect */}
            <AnimateIn direction="up" delay={100} className="lg:row-span-2">
              <Link
                href={`/category/${CATEGORIES[0].slug}`}
                className="card-elevated group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-200"
              >
                <CategoryIcon slug={CATEGORIES[0].slug} className="h-10 w-10 text-[var(--color-accent)]" />
                <h3 className="mt-6 text-xl font-medium text-zinc-800 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {CATEGORIES[0].name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {CATEGORIES[0].description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Browse articles
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </AnimateIn>
            {CATEGORIES.slice(1).map((cat, i) => (
              <AnimateIn key={cat.slug} direction="up" delay={150 + i * 75}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="card-elevated group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white p-8 transition-all duration-500 hover:-translate-y-0.5 hover:border-zinc-200"
                >
                  <CategoryIcon slug={cat.slug} className="h-8 w-8 text-[var(--color-accent)]" />
                  <h3 className="mt-4 text-lg font-medium text-zinc-800 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Browse articles
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Fresh content
                </p>
                <h2 className="mt-3 text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl">
                  Latest Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-[var(--color-accent)] sm:flex"
              >
                View all
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* First article is featured, spanning 2 columns */}
            <AnimateIn direction="up" delay={100} className="sm:col-span-2">
              <ArticleCard article={recentArticles[0]} featured />
            </AnimateIn>
            {recentArticles.slice(1).map((article, i) => (
              <AnimateIn key={article.slug} direction="up" delay={100 + i * 75} className="h-full">
                <ArticleCard article={article} />
              </AnimateIn>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--color-accent)] transition-colors duration-300 hover:text-[var(--color-accent-light)]"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why DIY Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn direction="up">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-light tracking-tight text-zinc-900 sm:text-4xl">
              Why DIY?
            </h2>
          </AnimateIn>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: "Save Money",
                desc: "Cut costs by doing projects yourself instead of hiring professionals for every task.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
                title: "Express Creativity",
                desc: "Customize every detail to match your vision and personal style perfectly.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
                title: "Learn New Skills",
                desc: "Build practical knowledge you can use throughout your life and share with others.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Add Home Value",
                desc: "Strategic improvements can significantly increase your property value over time.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} direction="up" delay={75 + i * 75}>
                <div className="h-full rounded-3xl border border-zinc-100 bg-white p-7 transition-all duration-500 hover:border-zinc-200 hover:shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-medium text-zinc-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn direction="up">
            <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 px-8 py-20 text-center sm:px-16">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--color-accent)] opacity-[0.08] blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-zinc-500 opacity-[0.06] blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
                  Get DIY Tips in Your Inbox
                </h2>
                <p className="mx-auto mt-4 max-w-md text-zinc-400">
                  Join our community of DIY enthusiasts and never miss a new project
                  guide.
                </p>
                <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-2xl border-0 bg-white/[0.07] px-5 py-3.5 text-sm text-white placeholder-zinc-500 backdrop-blur-sm transition-all focus:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl bg-[var(--color-accent)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--color-accent-light)]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
