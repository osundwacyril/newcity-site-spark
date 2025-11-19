import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GrandOpeningBanner } from "@/components/GrandOpeningBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Mail, MapPin, CheckCircle2 } from "lucide-react";

const Careers = () => {
  const jobPostings = [
    {
      id: 1,
      title: "Marketing Manager",
      type: "Full-time",
      location: "Nairobi, Kenya",
      deadline: "23rd November 2025",
      description: "We are seeking a versatile and talented person to join our team.",
      qualifications: [
        "Minimum qualification - Diploma in Marketing",
        "Computer literate with experience in digital marketing",
        "Experience in creative content",
        "Good communication skills",
        "Ability to work under pressure, with minimal supervision",
      ],
      additionalInfo: "Experience in real estate is an added advantage.",
      email: "info@newcitylands.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <GrandOpeningBanner />
      
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Join Our Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Be part of a dynamic team shaping the future of real estate in Kenya
              </p>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Section Header */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-foreground">Current Openings</h2>
                <p className="text-muted-foreground">
                  Explore exciting career opportunities with New City Real Estate
                </p>
              </div>

              {/* Job Cards */}
              {jobPostings.map((job) => (
                <Card key={job.id} className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-2xl">{job.title}</CardTitle>
                          <Badge variant="secondary" className="text-sm">
                            {job.type}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {job.description}
                        </CardDescription>
                      </div>
                      <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-lg font-semibold text-sm">
                        WE ARE HIRING
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {job.deadline}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Qualifications */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-destructive">
                        Qualifications
                      </h3>
                      <ul className="space-y-2">
                        {job.qualifications.map((qual, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Info */}
                    {job.additionalInfo && (
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm italic text-foreground">
                          {job.additionalInfo}
                        </p>
                      </div>
                    )}

                    {/* Application Section */}
                    <div className="border-t pt-6 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        How to Apply
                      </h3>
                      <p className="text-foreground">
                        Send your CVs and testimonials to reach us on or before{" "}
                        <span className="font-bold text-destructive">{job.deadline}</span>
                      </p>
                      <Button
                        size="lg"
                        className="w-full md:w-auto"
                        onClick={() => window.location.href = `mailto:${job.email}?subject=Application for ${job.title}`}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Apply via Email
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Email: <a href={`mailto:${job.email}`} className="text-primary hover:underline">{job.email}</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* No More Openings Message */}
              {jobPostings.length === 0 && (
                <Card className="p-12 text-center">
                  <Briefcase className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Current Openings</h3>
                  <p className="text-muted-foreground">
                    Check back soon for new opportunities to join our team!
                  </p>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Why Join New City Real Estate?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Growth Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Develop your career with training and advancement opportunities
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dynamic Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Work with passionate professionals in a collaborative environment
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Impactful Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Help people find their dream properties and build communities
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
