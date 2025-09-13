import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Gamepad2, 
  Scan, 
  Trophy, 
  Brain, 
  Users, 
  Smartphone,
  Target,
  Award
} from "lucide-react";
import arScanningImage from "@/assets/ar-scanning.jpg";
import gamificationImage from "@/assets/gamification.jpg";

export const Features = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-sports-blue" />,
      title: "Interactive Gamified Learning",
      description: "Engaging quests and modules that make learning anti-doping rules fun and memorable",
      image: gamificationImage,
      stats: "85% better retention",
      color: "sports-blue"
    },
    {
      icon: <Scan className="w-8 h-8 text-sports-orange" />,
      title: "AR Substance Scanning",
      description: "Real-time identification of banned substances using advanced AR technology",
      image: arScanningImage,
      stats: "99% accuracy rate",
      color: "sports-orange"
    },
    {
      icon: <Trophy className="w-8 h-8 text-warning-yellow" />,
      title: "Rewards & Achievements",
      description: "Earn points, badges, and real-world prizes for completing educational milestones",
      stats: "500+ achievement types",
      color: "warning-yellow"
    },
    {
      icon: <Brain className="w-8 h-8 text-success-green" />,
      title: "AI-Powered Personalization",
      description: "Adaptive learning paths tailored to individual progress and learning style",
      stats: "3x faster learning",
      color: "success-green"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Social Learning",
      description: "Team challenges, leaderboards, and peer collaboration for community building",
      stats: "90% engagement rate",
      color: "primary"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Cross-Platform Access",
      description: "Seamless experience across mobile, web, and VR platforms",
      stats: "100% compatibility",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary Learning
            <span className="block text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with engaging 
            educational content to create the most effective anti-doping education solution.
          </p>
        </div>

        {/* Featured cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {features.slice(0, 2).map((feature, index) => (
            <Card key={index} className="overflow-hidden bg-card-gradient shadow-card hover:shadow-lg transition-smooth group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {feature.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {feature.stats}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <GradientButton variant={feature.color === 'sports-blue' ? 'sports' : 'orange'} size="sm">
                  Learn More
                </GradientButton>
              </div>
            </Card>
          ))}
        </div>

        {/* Grid of remaining features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(2).map((feature, index) => (
            <Card key={index + 2} className="p-6 bg-card-gradient shadow-card hover:shadow-lg transition-smooth group hover:-translate-y-1">
              <div className="mb-4">
                <div className="bg-muted/20 rounded-full p-3 w-fit mb-4 group-hover:bg-muted/40 transition-smooth">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <Badge variant="outline" className="text-xs">
                  {feature.stats}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology highlights */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <span className="font-medium">Flutter Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-medium">ARCore/ARKit Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-success-green" />
              <span className="font-medium">AI-Powered Learning</span>
            </div>
          </div>
          <GradientButton variant="hero" size="lg">
            Explore Technical Details
          </GradientButton>
        </div>
      </div>
    </section>
  );
};