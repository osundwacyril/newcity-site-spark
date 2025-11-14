import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle, MapPin, Users, TrendingUp, Home, Shield, Banknote, Hash, Landmark, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center md:text-left">
                <span className="inline-block bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  Limited Plots at Only Kshs 350,000!
                </span>
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                  Secure Your Financial Future. Reserve Your Prime Land Plot Now.
                </h1>
                <p className="text-xl text-primary-foreground/90">
                  The fastest way to secure your investment is by making the direct deposit.
                </p>
                <a href="#deposit-form">
                  <Button size="lg" variant="default" className="text-lg px-8 py-6 h-auto">
                    View Payment Details for Kshs 35,000 Deposit
                  </Button>
                </a>
                <p className="text-sm text-primary-foreground/80 mt-2">100% Refundable Deposit. Act Fast.</p>
              </div>

              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" 
                  alt="Premium land development" 
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-card border-y border-border py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-around items-center gap-8">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                <p className="text-sm font-semibold text-foreground">Clear Title</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground">Prime Location</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-accent mb-2" />
                <p className="text-sm font-semibold text-foreground">1000+ Happy Owners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl font-extrabold text-foreground mb-12">Why Invest in New City Lands Today?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-lg border-t-4 border-primary">
                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Guaranteed Appreciation</h3>
                <p className="text-muted-foreground">Buy low in a rapidly developing area. Our land appreciation rates exceed 15% annually due to planned infrastructure.</p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg border-t-4 border-green-500">
                <Home className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Ready-to-Build Infrastructure</h3>
                <p className="text-muted-foreground">Paved access roads, immediate utility connections, and secured fencing. Start building your dream home sooner.</p>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg border-t-4 border-accent">
                <Shield className="w-12 h-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Secure & Verifiable Title</h3>
                <p className="text-muted-foreground">Full legal audit completed. Your deposit secures a plot with a guaranteed, unencumbered land title.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl font-extrabold text-secondary-foreground mb-12">The 3-Step Reservation Process</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="relative pt-16">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-secondary">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-foreground">Transfer Deposit</h3>
                <p className="text-secondary-foreground/80">Transfer the <strong>Kshs 35,000</strong> refundable reservation deposit using the banking details below.</p>
              </div>

              <div className="relative pt-16">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-secondary">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-foreground">Notify Agent</h3>
                <p className="text-secondary-foreground/80">Reply to your initial email or call our hotline with proof of payment and your preferred plot ID.</p>
              </div>

              <div className="relative pt-16">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-secondary">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-foreground">Finalize Purchase</h3>
                <p className="text-secondary-foreground/80">We confirm your plot and guide you through the remaining <strong>Kshs 315,000</strong> balance payment to secure your title.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deposit Details - Main Conversion Point */}
        <section id="deposit-form" className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card p-8 md:p-12 rounded-xl shadow-2xl border-t-8 border-accent">
              <h2 className="text-4xl font-extrabold text-foreground mb-4 text-center">Deposit: Kshs 35,000 to Reserve Your Plot</h2>
              <p className="text-center text-lg text-muted-foreground mb-8">
                Transfer your deposit directly to the agency account below. Once the transfer is complete, please contact us with the confirmation to finalize your reservation.
              </p>

              {/* Payment Details Box */}
              <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500 p-6 rounded-xl shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-green-300 dark:border-green-700 pb-3">
                  <p className="text-lg font-medium text-foreground flex items-center">
                    <Banknote className="w-5 h-5 mr-2 text-green-700 dark:text-green-500" />
                    Account Name:
                  </p>
                  <p className="text-xl font-bold text-green-800 dark:text-green-400">NewCity Agencies Limited</p>
                </div>
                <div className="flex items-center justify-between border-b border-green-300 dark:border-green-700 pb-3">
                  <p className="text-lg font-medium text-foreground flex items-center">
                    <Hash className="w-5 h-5 mr-2 text-green-700 dark:text-green-500" />
                    Account Number:
                  </p>
                  <p className="text-xl font-bold text-green-800 dark:text-green-400">0700284167802</p>
                </div>
                <div className="flex items-center justify-between border-b border-green-300 dark:border-green-700 pb-3">
                  <p className="text-lg font-medium text-foreground flex items-center">
                    <Landmark className="w-5 h-5 mr-2 text-green-700 dark:text-green-500" />
                    Bank Name:
                  </p>
                  <p className="text-xl font-bold text-green-800 dark:text-green-400">Equity Bank</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-foreground flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-700 dark:text-green-500" />
                    Branch:
                  </p>
                  <p className="text-xl font-bold text-green-800 dark:text-green-400">Kitengela</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://wa.me/254742498498"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="text-xl px-8 py-6 h-auto">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    I've Paid - Chat Sales Team on WhatsApp
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Note: Reservation is confirmed only upon receipt of payment confirmation. Click the button above to chat with our team now!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="py-8 bg-card border-t border-border text-center">
          <div className="container mx-auto px-4">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Total Project Price: Kshs 350,000</strong> | Deposit: Kshs 35,000
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
