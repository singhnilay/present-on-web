import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Trophy, 
  Users, 
  Target, 
  Award,
  Code,
  Palette,
  Brain,
  Lightbulb
} from "lucide-react";

export const Team = () => {
  const teamStats = [
    {
      icon: <Trophy className="w-8 h-8 text-warning-yellow" />,
      title: "Hackathon Experience",
      value: "15+",
      description: "Combined hackathon wins"
    },
    {
      icon: <Code className="w-8 h-8 text-sports-blue" />,
      title: "Development Hours",
      value: "10,000+",
      description: "Lines of code written"
    },
    {
      icon: <Award className="w-8 h-8 text-success-green" />,
      title: "Projects Completed",
      value: "50+",
      description: "Successful deliveries"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Team Size",
      value: "6",
      description: "Dedicated members"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: <Palette className="w-5 h-5 text-sports-blue" />,
      technologies: ["Flutter", "React", "UI/UX Design", "Responsive Design"]
    },
    {
      category: "Backend & Infrastructure",
      icon: <Code className="w-5 h-5 text-success-green" />,
      technologies: ["Firebase", "Node.js", "Cloud Functions", "Database Design"]
    },
    {
      category: "AR/VR & AI",
      icon: <Brain className="w-5 h-5 text-sports-orange" />,
      technologies: ["ARCore/ARKit", "Machine Learning", "Computer Vision", "Unity"]
    },
    {
      category: "Strategy & Innovation",
      icon: <Lightbulb className="w-5 h-5 text-warning-yellow" />,
      technologies: ["Product Strategy", "User Research", "Market Analysis", "Innovation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            SIH1722 - Team ID: 31295
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Team
            <span className="block bg-gradient-to-r from-sports-blue to-sports-orange bg-clip-text text-transparent">
              Tech Titans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team of innovators dedicated to revolutionizing anti-doping education 
            through cutting-edge technology and engaging user experiences.
          </p>
        </div>

        {/* Team stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card-gradient shadow-card hover:shadow-lg transition-smooth group">
              <div className="mb-4 flex justify-center">
                <div className="bg-muted/20 rounded-full p-4 group-hover:bg-muted/40 transition-smooth">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <h3 className="font-bold mb-1">{stat.title}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Skills section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Our Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <Card key={index} className="p-4 bg-card-gradient shadow-card">
                  <div className="flex items-start gap-3">
                    <div className="bg-muted/20 rounded-full p-2 mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{skill.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-accent" />
              Innovation Approach
            </h3>
            <Card className="p-6 bg-card-gradient shadow-card">
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-success-green/20 rounded-full p-2 mt-1">
                    <Award className="w-4 h-4 text-success-green" />
                  </div>
                  <div>
                    <h4 className="font-bold">User-Centric Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of athlete needs and learning patterns
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-sports-blue/20 rounded-full p-2 mt-1">
                    <Brain className="w-4 h-4 text-sports-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold">Technology Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless blend of AR, AI, and gamification technologies
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-sports-orange/20 rounded-full p-2 mt-1">
                    <Target className="w-4 h-4 text-sports-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold">Impact-Driven Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on measurable outcomes and behavioral change
                    </p>
                  </div>
                </div>
              </div>
              
              <GradientButton variant="sports" className="w-full">
                Learn About Our Methodology
              </GradientButton>
            </Card>
          </div>
        </div>

        {/* Competition info */}
        <Card className="p-8 bg-hero-gradient text-white text-center">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-warning-yellow" />
          <h3 className="text-2xl font-bold mb-4">Smart India Hackathon 2024</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-lg font-bold">Problem Statement</div>
              <div className="text-white/80">SIH1722</div>
            </div>
            <div>
              <div className="text-lg font-bold">Theme</div>
              <div className="text-white/80">Smart Education</div>
            </div>
            <div>
              <div className="text-lg font-bold">Category</div>
              <div className="text-white/80">Software</div>
            </div>
          </div>
          <p className="text-white/90 max-w-2xl mx-auto">
            Competing to transform anti-doping education through innovative technology solutions 
            that engage, educate, and empower the next generation of clean sport advocates.
          </p>
        </Card>
      </div>
    </section>
  );
};