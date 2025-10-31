import { Play } from "lucide-react";

const videoTestimonials = [
  {
    id: "GxdnMJzHq5Q",
    title: "Company Director - NewCity Real Estate",
    clientName: "Ndiritu Mathenge",
    location: "CEO, NewCity Real Estate",
  },
  {
    id: "hpo-hMwkFVY",
    title: "Company Director - NewCity Real Estate",
    clientName: "Ndiritu Mathenge",
    location: "CEO, NewCity Real Estate",
  },
];

export const VideoTestimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Play className="h-8 w-8 text-accent-red" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Video <span className="text-accent-red">Testimonials</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear directly from our satisfied clients about their experience with NewCity Real Estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{video.clientName}</h3>
                    <p className="text-sm text-muted-foreground">{video.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
