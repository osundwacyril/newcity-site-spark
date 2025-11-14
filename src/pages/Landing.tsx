import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle, MapPin, Users, TrendingUp, Home, Shield, Banknote, Hash, Landmark, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import catalogueImage from "@/assets/catalogue.jpg";
import grandOpeningImage from "@/assets/university-view-grand-opening.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main className="pt-[100px] sm:pt-[120px]">
        {/* Hero Section - Grand Opening */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-10 sm:py-12 md:py-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
                <span className="inline-block bg-[hsl(var(--accent-red))] text-accent-red-foreground text-[10px] xs:text-xs sm:text-sm font-bold px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider shadow-[var(--shadow-red-glow)] animate-pulse">
                  🎉 Grand Opening - Nov 22, 2025
                </span>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  University View Estate - Now Open!
                </h1>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-primary-foreground/90">
                  500 Meters to KCA University, Kitengela. Prime plots starting at Kshs 650,000 with flexible payment plans.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a href="#catalogue" className="block">
                    <Button size="lg" variant="default" className="text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 h-auto w-full sm:w-auto bg-[hsl(var(--accent-red))] hover:bg-[hsl(var(--accent-red))]/90 shadow-[var(--shadow-red-glow)]">
                      View All Properties
                    </Button>
                  </a>
                  <a href="#deposit-form" className="block">
                    <Button size="lg" variant="outline" className="text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 h-auto w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Reserve Your Plot
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={grandOpeningImage}
                  alt="University View Estate Grand Opening" 
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Properties Catalogue Section */}
        <section id="catalogue" className="py-10 sm:py-12 md:py-20 bg-muted">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4">
                Our Property Catalogue
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Explore our range of prime properties with flexible payment plans
              </p>
            </div>

            <div className="grid gap-6 md:gap-8">
              {/* Featured Catalogue Image */}
              <div className="bg-card rounded-xl shadow-xl overflow-hidden border-2 border-primary/20">
                <img 
                  src={catalogueImage}
                  alt="New City Properties Catalogue" 
                  className="w-full h-auto"
                />
              </div>

              {/* Key Highlights */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Home className="w-5 h-5 text-green-600" />
                    Multiple Locations
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    From Kitengela to Konza, choose from prime locations near major institutions
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-950/20 border-2 border-[hsl(var(--accent-red))] p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[hsl(var(--accent-red))]" />
                    Flexible Plans
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Low deposits from 10% with balance payable in 3-12 months
                  </p>
                </div>

                <div className="bg-primary/5 border-2 border-primary p-4 md:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Secure Titles
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    All properties come with clean, verifiable land titles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-card border-y border-border py-5 sm:py-6 md:py-8">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-around items-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[hsl(var(--accent-red))] mb-1 sm:mb-2" />
                <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-foreground">Clear Title</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary mb-1 sm:mb-2" />
                <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-foreground">Prime Location</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[hsl(var(--accent-red))] mb-1 sm:mb-2" />
                <p className="text-[10px] xs:text-xs md:text-sm font-semibold text-foreground">75+ Happy Owners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Benefits */}
        <section className="py-10 sm:py-12 md:py-20 bg-muted/30">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-8 md:mb-12">Why Invest in New City Lands Today?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-primary">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary mb-3 md:mb-4 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">Guaranteed Appreciation</h3>
                <p className="text-sm md:text-base text-muted-foreground">Buy low in a rapidly developing area. Our land appreciation rates exceed 15% annually due to planned infrastructure.</p>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                <Home className="w-10 h-10 md:w-12 md:h-12 text-green-600 mb-3 md:mb-4 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">Ready-to-Build Infrastructure</h3>
                <p className="text-sm md:text-base text-muted-foreground">Paved access roads, immediate utility connections, and secured fencing. Start building your dream home sooner.</p>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-[hsl(var(--accent-red))] sm:col-span-2 md:col-span-1">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-[hsl(var(--accent-red))] mb-3 md:mb-4 mx-auto" />
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">Secure & Verifiable Title</h3>
                <p className="text-sm md:text-base text-muted-foreground">Full legal audit completed. Your deposit secures a plot with a guaranteed, unencumbered land title.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-10 sm:py-12 md:py-20 bg-secondary">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-8 md:mb-12">The 3-Step Reservation Process</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
              <div className="relative pt-12 md:pt-16">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg border-4 border-secondary">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-secondary-foreground">Transfer Deposit</h3>
                <p className="text-sm md:text-base text-secondary-foreground/80">Transfer the <strong>Kshs 65,000</strong> refundable reservation deposit using the banking details below.</p>
              </div>

              <div className="relative pt-12 md:pt-16">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg border-4 border-secondary">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-secondary-foreground">Notify Agent</h3>
                <p className="text-sm md:text-base text-secondary-foreground/80">Reply to your initial email or call our hotline with proof of payment and your preferred plot ID.</p>
              </div>

              <div className="relative pt-12 md:pt-16 sm:col-span-2 md:col-span-1">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg border-4 border-secondary">
                  3
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-secondary-foreground">Finalize Purchase</h3>
                <p className="text-sm md:text-base text-secondary-foreground/80">We confirm your plot and guide you through the remaining <strong>Kshs 585,000</strong> balance payment to secure your title.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deposit Details - Main Conversion Point */}
        <section id="deposit-form" className="py-10 sm:py-12 md:py-20 bg-muted">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="bg-card p-6 md:p-8 lg:p-12 rounded-xl shadow-2xl border-t-8 border-[hsl(var(--accent-red))]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4 text-center">Deposit: Kshs 65,000 to Reserve Your Plot</h2>
              <p className="text-center text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Transfer your deposit directly to the agency account below. Once the transfer is complete, please contact us with the confirmation to finalize your reservation.
              </p>

              {/* Payment Details Box */}
              <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500 p-4 md:p-6 rounded-xl shadow-lg space-y-3 md:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-green-300 dark:border-green-700 pb-2 md:pb-3 gap-2">
                  <p className="text-sm md:text-lg font-medium text-foreground flex items-center">
                    <Banknote className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-700 dark:text-green-500" />
                    Account Name:
                  </p>
                  <p className="text-base md:text-xl font-bold text-green-800 dark:text-green-400 break-words">NewCity Agencies Limited</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-green-300 dark:border-green-700 pb-2 md:pb-3 gap-2">
                  <p className="text-sm md:text-lg font-medium text-foreground flex items-center">
                    <Hash className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-700 dark:text-green-500" />
                    Account Number:
                  </p>
                  <p className="text-base md:text-xl font-bold text-green-800 dark:text-green-400">0700284167802</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-green-300 dark:border-green-700 pb-2 md:pb-3 gap-2">
                  <p className="text-sm md:text-lg font-medium text-foreground flex items-center">
                    <Landmark className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-700 dark:text-green-500" />
                    Bank Name:
                  </p>
                  <p className="text-base md:text-xl font-bold text-green-800 dark:text-green-400">Equity Bank</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-sm md:text-lg font-medium text-foreground flex items-center">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-700 dark:text-green-500" />
                    Branch:
                  </p>
                  <p className="text-base md:text-xl font-bold text-green-800 dark:text-green-400">Kitengela</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-center">
                <a
                  href="https://wa.me/254742498498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-base sm:text-lg md:text-xl px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto bg-[hsl(var(--accent-red))] hover:bg-[hsl(var(--accent-red))]/90 shadow-[var(--shadow-red-glow)]">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                    I've Paid - Chat Sales Team on WhatsApp
                  </Button>
                </a>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 md:mt-4 px-2">
                  Note: Reservation is confirmed only upon receipt of payment confirmation. Click the button above to chat with our team now!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="py-5 sm:py-6 md:py-8 bg-card border-t border-border text-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground">
              <strong className="text-foreground">Total Project Price: Kshs 650,000</strong> | Deposit: Kshs 65,000
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
