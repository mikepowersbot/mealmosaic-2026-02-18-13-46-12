import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Welcome to MealMosaic
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover a new way to plan, organize, and enjoy your meals. Build your perfect
          culinary experience with our intelligent meal planning platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="w-full sm:w-auto text-base">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}