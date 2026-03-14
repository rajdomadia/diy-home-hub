export const SITE_NAME = "DIY Home Hub";
export const SITE_DESCRIPTION =
  "Your ultimate guide to home projects, creative crafts, and gardening tips. Step-by-step tutorials, expert advice, and inspiration for every DIY enthusiast.";
export const SITE_URL = "https://diyhomehub.app";
export const SITE_AUTHOR = "DIY Home Hub Team";

export const CATEGORIES = [
  {
    name: "Home Projects",
    slug: "home-projects",
    description:
      "Transform your living space with our detailed home improvement guides. From simple repairs to complete room makeovers, find step-by-step instructions for every skill level.",
    icon: "home-projects",
    color: "bg-zinc-100 text-zinc-600",
    hoverColor: "hover:bg-zinc-50",
  },
  {
    name: "Crafts",
    slug: "crafts",
    description:
      "Unleash your creativity with handmade craft projects. Discover tutorials for macrame, candle making, resin art, woodworking, and more unique creations.",
    icon: "crafts",
    color: "bg-zinc-100 text-zinc-600",
    hoverColor: "hover:bg-zinc-50",
  },
  {
    name: "Gardening",
    slug: "gardening",
    description:
      "Grow your green thumb with practical gardening guides. Learn about raised beds, composting, indoor herbs, vertical gardens, and sustainable growing practices.",
    icon: "gardening",
    color: "bg-zinc-100 text-zinc-600",
    hoverColor: "hover:bg-zinc-50",
  },
] as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Home Projects", href: "/category/home-projects" },
  { name: "Crafts", href: "/category/crafts" },
  { name: "Gardening", href: "/category/gardening" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
