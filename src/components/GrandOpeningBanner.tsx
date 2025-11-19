import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const GrandOpeningBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground py-3 px-4 shadow-lg overflow-hidden animate-slide-in-right">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Scrolling Content */}
          <div className="flex items-center gap-2 flex-1 overflow-hidden">
            <Sparkles className="w-5 h-5 flex-shrink-0 animate-pulse" />
            <div className="whitespace-nowrap animate-marquee text-sm md:text-base">
              <span className="font-bold">✨ Welcome to the BIG DAY — Grand Opening of University View Estate</span>
              <span className="mx-4">|</span>
              <span>Opening in 3 days! Hurry, only a few slots remaining!</span>
              <span className="mx-4">|</span>
              <span>📍 Kitengela Town, opposite Kitengela Mall</span>
              <span className="mx-4">|</span>
              <span>🕙 10:00 AM</span>
              <span className="mx-4">|</span>
              <span>📅 22nd November 2025</span>
              <span className="mx-4">|</span>
              <span>Come with a friend — let's build the future together</span>
            </div>
          </div>

          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 h-8 w-8 text-primary-foreground hover:bg-background/20"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
