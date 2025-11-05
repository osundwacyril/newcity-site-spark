import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                Stay Updated with NewCity Real Estate
              </h1>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest property listings, investment opportunities, and market insights
              </p>
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
