import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Users, 
  DollarSign, 
  Leaf,
  Cpu,
  Shield,
  Target,
  TrendingUp,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export const Impact = () => {
  const impactAreas = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health Impact",
      description: "Promotes safer, ethical choices among athletes",
      benefits: [
        "Reduced use of banned substances",
        "Better understanding of health risks",
        "Informed decision-making",
        "Long-term athlete wellness"
      ],
      color: "red"
    },
    {
      icon: <Users className="w-8 h-8 text-sports-blue" />,
      title: "Social Impact",
      description: "Promotes fair competition and trust in sports",
      benefits: [
        "Enhanced sport integrity",
        "Increased public trust",
        "Fair play culture",
        "Positive role models"
      ],
      color: "blue"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-success-green" />,
      title: "Economic Impact",
      description: "Reduces doping-related costs and legal issues",
      benefits: [
        "Lower investigation costs",
        "Reduced legal expenses",
        "Increased sponsorship value",
        "Sustainable sports economy"
      ],
      color: "green"
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Environmental Impact",
      description: "Supports sustainability by discouraging harmful substances",
      benefits: [
        "Reduced chemical waste",
        "Cleaner sports facilities",
        "Sustainable practices",
        "Environmental awareness"
      ],
      color: "emerald"
    },
    {
      icon: <Cpu className="w-8 h-8 text-sports-orange" />,
      title: "Technological Impact",
      description: "Advances AR/VR applications in sports education",
      benefits: [
        "Innovation in sports tech",
        "Educational AR advancement",
        "AI in learning systems",
        "Technology accessibility"
      ],
      color: "orange"
    }
  ];

  const benefits = [
    {
      category: "Educational Benefits",
      icon: <Target className="w-6 h-6 text-primary" />,
      items: [
        { benefit: "Increased knowledge retention", impact: 85 },
        { benefit: "Better engagement rates", impact: 92 },
        { benefit: "Improved decision-making skills", impact: 78 },
        { benefit: "Enhanced awareness", impact: 95 }
      ]
    },
    {
      category: "Behavioral Benefits",
      icon: <TrendingUp className="w-6 h-6 text-success-green" />,
      items: [
        { benefit: "Reduced risky behaviors", impact: 70 },
        { benefit: "Increased clean sport advocacy", impact: 88 },
        { benefit: "Better peer influence", impact: 82 },
        { benefit: "Long-term habit formation", impact: 75 }
      ]
    }
  ];

  const challenges = [
    {
      challenge: "Engagement with traditional education methods",
      solution: "Gamified rewards and social features",
      status: "solved",
      icon: <CheckCircle className="w-5 h-5 text-success-green" />
    },
    {
      challenge: "Technical complexity of AR/VR integration",
      solution: "Utilizes proven Flutter and Firebase technologies",
      status: "mitigated",
      icon: <Shield className="w-5 h-5 text-sports-blue" />
    },
    {
      challenge: "User data security and privacy concerns",
      solution: "Strong data security protocols and compliance",
      status: "addressed",
      icon: <CheckCircle className="w-5 h-5 text-success-green" />
    },
    {
      challenge: "Rapid regulatory changes in anti-doping",
      solution: "Expert collaborations and real-time updates",
      status: "ongoing",
      icon: <AlertTriangle className="w-5 h-5 text-warning-yellow" />
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Impact & Benefits
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforming Sports
            <span className="block text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solution creates positive impact across multiple dimensions, 
            fostering a culture of clean sport and ethical competition.
          </p>
        </div>

        {/* Impact areas */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {impactAreas.map((area, index) => (
            <Card key={index} className="p-6 bg-card-gradient shadow-card hover:shadow-lg transition-smooth group text-center">
              <div className="mb-4 flex justify-center">
                <div className="bg-muted/20 rounded-full p-4 group-hover:bg-muted/40 transition-smooth">
                  {area.icon}
                </div>
              </div>
              <h3 className="font-bold mb-3">{area.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
              <div className="space-y-1">
                {area.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-success-green flex-shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits with metrics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((category, index) => (
            <Card key={index} className="p-6 bg-card-gradient shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-muted/20 rounded-full p-2">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{item.benefit}</span>
                      <span className="text-sm text-muted-foreground">{item.impact}%</span>
                    </div>
                    <Progress value={item.impact} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Challenges and solutions */}
        <Card className="p-8 bg-card-gradient shadow-card">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 rounded-full p-3">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Challenges & Solutions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 bg-background/50">
                <div className="flex items-start gap-3 mb-3">
                  {item.icon}
                  <div>
                    <h4 className="font-bold text-sm mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{item.challenge}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success-green mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
                
                <div className="mt-3">
                  <Badge variant={item.status === 'solved' ? 'default' : 
                                item.status === 'mitigated' ? 'secondary' : 
                                item.status === 'addressed' ? 'default' : 'outline'} 
                         className="text-xs">
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Key outcomes */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Expected Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Increase in anti-doping knowledge</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success-green mb-2">70%</div>
              <p className="text-sm text-muted-foreground">Reduction in risky behaviors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sports-orange mb-2">95%</div>
              <p className="text-sm text-muted-foreground">User engagement rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};