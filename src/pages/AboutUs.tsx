import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">About Transport Safety Network</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To educate and promote safety awareness across all transport sectors - road, aviation, maritime, and rail - ensuring compliance with international safety standards through comprehensive programs and initiatives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the leading organization in transport safety advocacy, creating a safer transportation environment through education, research, and collaboration across all sectors.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>Conduct transport safety awareness campaigns</li>
                  <li>Provide first aid and ambulance services</li>
                  <li>Manufacture and distribute transport safety products</li>
                  <li>Publish transport safety magazines</li>
                  <li>Facilitate exchange programs for research and experience sharing</li>
                  <li>Connect with regulatory bodies for improved safety standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Through our various initiatives and programs, we have successfully:
                </p>
                <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
                  <li>Educated thousands on transport safety measures</li>
                  <li>Established partnerships with key stakeholders</li>
                  <li>Contributed to the development of safety standards</li>
                  <li>Created a network of safety professionals across sectors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
