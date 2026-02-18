import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import Hero from "@/components/hero";

export default function Home() {
  const projectName = "MealMosaic";
  return (
    <div className="min-h-screen">
      {/* Theme toggle in top-right corner */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Hero />
      <div className="flex items-center justify-center bg-muted/30 p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">{projectName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Project landing page.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}