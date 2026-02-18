import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/hero";

export default function Home() {
  const projectName = "MealMosaic";
  return (
    <div className="min-h-screen">
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