import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "James Mwangi",
    location: "Lucky Gardens Owner",
    text: "I bought a plot at Lucky Gardens last year, and I'm amazed by how quickly the area is developing. The title deed process was smooth and transparent. NewCity Real Estate delivered on all their promises!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Njeri",
    location: "Fahari Gardens Investor",
    text: "The flexible payment plan at Fahari Gardens made it possible for me to own land. The team was professional and kept me updated throughout. I've already started construction on my dream home!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Ochieng",
    location: "Konza View Phase 2",
    text: "Investing in Konza View was one of my best decisions. The location near the upcoming tech city is strategic, and the price was unbeatable. The value has already appreciated significantly!",
    rating: 5,
  },
  {
    id: 4,
    name: "Grace Wambui",
    location: "KCA Commercial Owner",
    text: "I purchased a commercial plot near KCA University for rental apartments. The returns have exceeded my expectations! NewCity Real Estate helped me make a smart investment choice.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from satisfied landowners who trusted us with their investment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-primary/20" />
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
