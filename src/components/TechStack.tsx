import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Cpu, 
  Database, 
  Palette, 
  Shield,
  Cloud,
  Camera,
  Gamepad2
} from "lucide-react";

export const TechStack = () => {
  const techCategories = [
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6 text-sports-blue" />,
      technologies: [
        { name: "Flutter", progress: 95, description: "Cross-platform framework" },
        { name: "Dart", progress: 90, description: "Primary programming language" },
        { name: "Java/Kotlin", progress: 85, description: "Android native features" },
        { name: "Swift", progress: 80, description: "iOS native features" }
      ]
    },
    {
      category: "AR/VR Technology",
      icon: <Camera className="w-6 h-6 text-sports-orange" />,
      technologies: [
        { name: "ARCore", progress: 90, description: "Android AR capabilities" },
        { name: "ARKit", progress: 88, description: "iOS AR capabilities" },
        { name: "Unity", progress: 75, description: "Advanced AR functionalities" },
        { name: "WebXR", progress: 70, description: "Web-based VR experiences" }
      ]
    },
    {
      category: "Backend & Database",
      icon: <Database className="w-6 h-6 text-success-green" />,
      technologies: [
        { name: "Firebase", progress: 92, description: "Real-time database & auth" },
        { name: "Cloud Functions", progress: 85, description: "Serverless backend" },
        { name: "Firestore", progress: 88, description: "NoSQL document database" },
        { name: "Firebase Analytics", progress: 80, description: "User behavior tracking" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      technologies: [
        { name: "TensorFlow Lite", progress: 85, description: "On-device ML models" },
        { name: "ML Kit", progress: 88, description: "Google's ML APIs" },
        { name: "Natural Language API", progress: 80, description: "Text analysis" },
        { name: "Custom AI Models", progress: 75, description: "Personalized learning" }
      ]
    }
  ];

  const developmentPhases = [
    {
      phase: "Design Phase",
      description: "Create prototypes in Figma",
      status: "completed",
      icon: <Palette className="w-5 h-5 text-success-green" />
    },
    {
      phase: "Development Phase", 
      description: "Build cross-platform app using Flutter",
      status: "in-progress",
      icon: <Smartphone className="w-5 h-5 text-sports-blue" />
    },
    {
      phase: "AR Integration",
      description: "Add ARCore (Android) and ARKit (iOS) for AR features",
      status: "planned",
      icon: <Camera className="w-5 h-5 text-sports-orange" />
    },
    {
      phase: "Test & Code Features",
      description: "Ensure smooth interactions and accurate code",
      status: "planned",
      icon: <Shield className="w-5 h-5 text-warning-yellow" />
    },
    {
      phase: "Deploy App",
      description: "Publish to Google Play Store and App Store",
      status: "planned",
      icon: <Cloud className="w-5 h-5 text-accent" />
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Approach
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cutting-Edge
            <span className="block text-primary">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with modern technologies to deliver a seamless, scalable, and engaging experience
          </p>
        </div>

        {/* Technology grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card-gradient shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-muted/20 rounded-full p-2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">{tech.progress}%</span>
                    </div>
                    <Progress value={tech.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Development phases */}
        <Card className="p-8 bg-card-gradient shadow-card">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 rounded-full p-3">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Implementation Process</h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {developmentPhases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  phase.status === 'completed' ? 'bg-success-green/20' :
                  phase.status === 'in-progress' ? 'bg-sports-blue/20' : 'bg-muted/20'
                }`}>
                  {phase.icon}
                </div>
                <h4 className="font-bold mb-2">{phase.phase}</h4>
                <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                <Badge variant={
                  phase.status === 'completed' ? 'default' : 
                  phase.status === 'in-progress' ? 'secondary' : 'outline'
                } className="text-xs">
                  {phase.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Hardware requirements */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-bold mb-4">Hardware Requirements</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline">Smartphones with ARCore support</Badge>
            <Badge variant="outline">iOS devices with ARKit support</Badge>
            <Badge variant="outline">Minimum 3GB RAM</Badge>
            <Badge variant="outline">Android 7.0+ / iOS 12.0+</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};