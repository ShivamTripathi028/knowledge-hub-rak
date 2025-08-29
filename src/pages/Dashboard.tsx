import { FileText, Users, Briefcase, Star, TrendingUp, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { DashboardCard } from "@/components/DashboardCard";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";

const dashboardCards = [
  {
    icon: Star,
    title: "For You",
    description: "Personalized content based on your role and department",
    items: [
      "New employee onboarding checklist",
      "Q4 performance review guidelines",
      "Updated remote work policies"
    ],
    href: "/dashboard/for-you"
  },
  {
    icon: Users,
    title: "Department Updates",
    description: "Latest news and updates from your department",
    items: [
      "Engineering team sync notes",
      "New project management tools",
      "Security protocol updates"
    ],
    href: "/dashboard/department"
  },
  {
    icon: Briefcase,
    title: "Quick Access",
    description: "Essential handbooks and policies at your fingertips",
    items: [
      "Employee handbook",
      "IT security policies",
      "Benefits and compensation guide"
    ],
    href: "/dashboard/policies"
  }
];

const internalArticles = [
  {
    title: "Q1 2025 Company Goals and Objectives",
    excerpt: "Learn about our strategic priorities for the upcoming quarter and how your team contributes to success.",
    category: "Company News",
    date: "Dec 20, 2024",
    href: "/articles/q1-goals",
    isInternal: true
  },
  {
    title: "New Employee Benefits Package Changes",
    excerpt: "Important updates to health insurance, retirement plans, and other employee benefits effective January 1st.",
    category: "HR Updates",
    date: "Dec 18, 2024",
    href: "/articles/benefits-update",
    isInternal: true
  },
  {
    title: "Updated Security Protocols for Remote Work",
    excerpt: "Essential security guidelines for employees working from home or remote locations.",
    category: "IT Security",
    date: "Dec 15, 2024",
    href: "/articles/security-protocols",
    isInternal: true
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background employee-theme">
      <Header isEmployee={true} />
      
      {/* Welcome Section */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold font-poppins mb-4">
              Welcome back, Sarah
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Here's what you need today – stay informed with the latest updates and resources.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary-foreground" />
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-primary-foreground/80">New articles this week</div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  <div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-primary-foreground/80">Updates in your department</div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-primary-foreground/80">Action items pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Button 
                variant="search" 
                size="search" 
                className="w-full shadow-card border bg-card text-muted-foreground"
              >
                <FileText className="h-5 w-5 mr-3 text-muted-foreground" />
                Search internal documentation, policies, guides...
              </Button>
            </div>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {dashboardCards.map((card) => (
              <DashboardCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                items={card.items}
                href={card.href}
              />
            ))}
          </div>

          {/* Recent Internal Articles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold font-poppins text-foreground mb-2">
                  Recent Updates
                </h2>
                <p className="text-lg text-muted-foreground">
                  Stay current with the latest internal news and updates
                </p>
              </div>
              <Button variant="outline">
                View All Updates
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internalArticles.map((article) => (
                <ArticleCard
                  key={article.title}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  date={article.date}
                  href={article.href}
                  isInternal={article.isInternal}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;