import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-4xl text-center">About MealMosaic</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">
              We believe that cooking should be a joyful, creative experience. 
              MealMosaic is on a mission to transform how people discover, plan, and enjoy meals.
            </p>
            <p className="text-muted-foreground">
              Founded in 2026, we&apos;re building tools that make meal planning intuitive, 
              personalized and fun for everyone.
            </p>
          </CardContent>
        </Card>

        {/* Mission Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              At MealMosaic, we&apos;re passionate about creating a world where everyone can 
              enjoy delicious, nutritious meals without the stress of planning. We combine 
              smart technology with culinary expertise to help you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Discover new recipes tailored to your preferences</li>
              <li>Plan meals efficiently to reduce food waste</li>
              <li>Generate smart shopping lists automatically</li>
              <li>Explore diverse cuisines and cooking techniques</li>
              <li>Save time while eating better</li>
            </ul>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">What We Offer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Smart Recipe Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered recommendations based on your tastes, dietary needs, and available ingredients.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Meal Planning Made Simple</h3>
                <p className="text-sm text-muted-foreground">
                  Drag-and-drop calendar interface to organize your week&apos;s meals in minutes.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Automatic Shopping Lists</h3>
                <p className="text-sm text-muted-foreground">
                  Generate organized shopping lists from your meal plan, grouped by store sections.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Nutrition Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Keep an eye on your nutritional goals with detailed breakdowns for every meal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              MealMosaic is built by a small, dedicated team of food lovers, developers, and designers 
              who believe technology can make everyday life better.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="font-semibold">Alex Chen</h3>
                <p className="text-sm text-muted-foreground">Co-founder & CEO</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Former chef turned tech entrepreneur
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <h3 className="font-semibold">Sarah Miller</h3>
                <p className="text-sm text-muted-foreground">Co-founder & CTO</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Full-stack developer and nutrition enthusiast
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold">Jordan Lee</h3>
                <p className="text-sm text-muted-foreground">Head of Design</p>
                <p className="text-xs text-muted-foreground mt-1">
                  UX designer with a passion for food photography
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact/CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Join Our Journey</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>
              We&apos;re just getting started, and we&apos;d love to have you along for the ride. 
              Whether you&apos;re a home cook, a busy parent, or just someone who loves good food, 
              MealMosaic is here to help.
            </p>
            <p className="text-sm opacity-90">
              Have questions or feedback? Reach out to us at hello@mealmosaic.com
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
