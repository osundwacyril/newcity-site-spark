import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Neighborhoods in Nairobi for First-Time Homebuyers",
    excerpt: "Discover the most affordable and promising neighborhoods perfect for your first property investment in Nairobi.",
    author: "NewCity Real Estate Team",
    date: "2025-10-15",
    readTime: "5 min read",
    category: "Buying Guide",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Understanding Property Valuation in Kenya",
    excerpt: "Learn how property values are determined and what factors influence real estate prices in the Kenyan market.",
    author: "NewCity Real Estate Team",
    date: "2025-10-10",
    readTime: "7 min read",
    category: "Market Insights",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "The Complete Guide to Property Documentation in Kenya",
    excerpt: "Everything you need to know about title deeds, land registrations, and legal requirements for property ownership.",
    author: "NewCity Real Estate Team",
    date: "2025-10-05",
    readTime: "10 min read",
    category: "Legal Guide",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Investment Opportunities: Land vs Developed Properties",
    excerpt: "Compare the pros and cons of investing in raw land versus fully developed properties in today's market.",
    author: "NewCity Real Estate Team",
    date: "2025-09-28",
    readTime: "6 min read",
    category: "Investment",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "How to Finance Your Dream Home in Kenya",
    excerpt: "Explore different financing options including mortgages, savings plans, and government housing schemes.",
    author: "NewCity Real Estate Team",
    date: "2025-09-20",
    readTime: "8 min read",
    category: "Finance",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Sustainable Living: Eco-Friendly Homes in Kenya",
    excerpt: "Discover the benefits of green building practices and sustainable property development in modern Kenya.",
    author: "NewCity Real Estate Team",
    date: "2025-09-15",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/placeholder.svg"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Real Estate Insights & Tips
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay informed with the latest news, market trends, and expert advice on property investment in Kenya
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center p-8">
              <CardHeader>
                <CardTitle className="text-3xl">Subscribe to Our Newsletter</CardTitle>
                <CardDescription className="text-base mt-2">
                  Get the latest real estate insights, market updates, and exclusive property listings delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
