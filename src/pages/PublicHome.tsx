import { HelpCircle, BookOpen, Wrench, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { ArticleCard } from "@/components/ArticleCard";

const categories = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find quick answers to commonly asked questions",
    href: "/categories/faq",
    count: 24
  },
  {
    icon: BookOpen,
    title: "User Guides",
    description: "Step-by-step guides to help you get started",
    href: "/categories/guides",
    count: 18
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Solve technical issues and common problems",
    href: "/categories/troubleshooting",
    count: 32
  },
  {
    icon: MessageCircle,
    title: "Contact Support",
    description: "Get direct help from our support team",
    href: "/contact",
    count: 0
  }
];

const recentArticles = [
  {
    title: "Getting Started with Your New Account",
    excerpt: "Learn how to set up your account, configure preferences, and start using our platform effectively.",
    category: "Getting Started",
    date: "Dec 15, 2024",
    href: "/articles/getting-started"
  },
  {
    title: "How to Reset Your Password",
    excerpt: "Step-by-step instructions for resetting your password if you've forgotten it or need to update it.",
    category: "Account",
    date: "Dec 12, 2024",
    href: "/articles/reset-password"
  },
  {
    title: "Understanding Our Privacy Policy",
    excerpt: "A comprehensive overview of how we handle your data and protect your privacy on our platform.",
    category: "Legal",
    date: "Dec 10, 2024",
    href: "/articles/privacy-policy"
  }
];

const PublicHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our organized knowledge base to find exactly what you're looking for
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
                href={category.href}
                count={category.count > 0 ? category.count : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">
              Recent Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay up to date with our latest guides and updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-2xl font-bold font-poppins text-primary">
                📚 BookStack
              </div>
            </div>
            <div className="flex space-x-8 text-sm text-muted-foreground">
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/contact" className="hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t text-sm text-muted-foreground">
            © 2024 BookStack Knowledge Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHome;