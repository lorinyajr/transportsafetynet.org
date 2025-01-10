import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Plane, Ship, Train } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const logoWrapper = `
    relative
    inline-block
    before:content-['']
    before:absolute
    before:inset-0
    before:bg-gradient-radial
    before:from-white
    before:via-white/50
    before:to-transparent
    before:blur-2xl
    before:rounded-full
    before:w-[calc(100%+96px)]
    before:h-[calc(100%+96px)]
    before:-m-12
  `;

  const focusAreas = [
    {
      title: "Road Safety",
      description: "Promoting safe driving practices and vehicle maintenance standards",
      icon: Car,
      color: "text-blue-500"
    },
    {
      title: "Aviation Safety",
      description: "Ensuring high standards in aircraft operations and maintenance",
      icon: Plane,
      color: "text-blue-600"
    },
    {
      title: "Maritime Safety",
      description: "Maintaining safety standards for vessels and maritime operations",
      icon: Ship,
      color: "text-blue-700"
    },
    {
      title: "Rail Safety",
      description: "Implementing safety measures for rail transport systems",
      icon: Train,
      color: "text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className={logoWrapper}>
              <img 
                src="/lovable-uploads/5f98715a-3021-4072-992d-c666013063eb.png" 
                alt="Transport Safety Network Logo" 
                className="h-32 w-auto relative z-10"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Promoting safety across all transportation sectors through education, awareness, and collaboration.
          </p>
          <div className="space-x-4">
            <Button asChild variant="secondary" size="lg">
              <Link to="/about-us">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Focus Areas Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className={`h-8 w-8 ${area.color}`} />
                </div>
                <CardTitle className="text-xl text-center mb-2">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
