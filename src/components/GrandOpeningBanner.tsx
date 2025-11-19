import { Calendar, MapPin, Clock, Sparkles } from "lucide-react";

export const GrandOpeningBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground py-6 px-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Main Heading */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Welcome to the BIG DAY — the Grand Opening of University View Estate
            </h2>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          {/* Urgency Message */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl font-semibold">
              We're opening our gates in 3 days!
            </p>
            <p className="text-base md:text-lg">
              Have you booked your slot? <span className="font-bold">Hurry, only a few remaining!</span>
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full max-w-4xl">
            <div className="flex items-center justify-center gap-2 bg-background/10 rounded-lg p-3">
              <MapPin className="w-5 h-5" />
              <div className="text-left">
                <p className="text-sm font-semibold">Pick-up Point</p>
                <p className="text-sm">Kitengela Town, opposite Kitengela Mall</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 bg-background/10 rounded-lg p-3">
              <Clock className="w-5 h-5" />
              <div className="text-left">
                <p className="text-sm font-semibold">Time</p>
                <p className="text-sm">10:00 AM</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 bg-background/10 rounded-lg p-3">
              <Calendar className="w-5 h-5" />
              <div className="text-left">
                <p className="text-sm font-semibold">Date</p>
                <p className="text-sm">22nd November 2025</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <p className="text-base md:text-lg font-medium mt-2">
            Come with a friend — let's build the future together
          </p>
        </div>
      </div>
    </div>
  );
};
