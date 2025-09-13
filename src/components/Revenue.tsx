import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Building, 
  CreditCard, 
  Handshake, 
  ShoppingCart,
  Package,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  Zap
} from "lucide-react";

export const Revenue = () => {
  const revenueStreams = [
    {
      icon: <Building className="w-8 h-8 text-sports-blue" />,
      title: "Corporate Training",
      description: "Sell anti-doping training programs to teams and schools",
      pricing: "$50-200/user",
      market: "Sports teams, educational institutions",
      potential: "High",
      color: "sports-blue"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-success-green" />,
      title: "Premium Subscriptions",
      description: "Paid plans for premium content and advanced features",
      pricing: "$9.99/month",
      market: "Individual athletes, coaches",
      potential: "Very High",
      color: "success-green"
    },
    {
      icon: <Handshake className="w-8 h-8 text-sports-orange" />,
      title: "Sponsorships & Partnerships",
      description: "Collaborate with sports brands and anti-doping organizations",
      pricing: "$10K-100K/deal",
      market: "Sports brands, WADA, national agencies",
      potential: "High",
      color: "sports-orange"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "In-App Purchases",
      description: "Buy extra modules, advanced games, and AR tools",
      pricing: "$2.99-19.99",
      market: "Engaged users, premium learners",
      potential: "Medium",
      color: "primary"
    },
    {
      icon: <Package className="w-8 h-8 text-accent" />,
      title: "Merchandising",
      description: "Sell branded clean sport products and educational materials",
      pricing: "$15-75/item",
      market: "Athletes, sports enthusiasts",
      potential: "Medium",
      color: "accent"
    }
  ];

  const marketAnalysis = [
    {
      segment: "Youth Athletes (Age 14-25)",
      size: "2.5M+ globally",
      revenue: "$50M potential",
      engagement: "Very High",
      icon: <Users className="w-5 h-5 text-sports-blue" />
    },
    {
      segment: "Educational Institutions",
      size: "25K+ sports programs",
      revenue: "$125M potential",
      engagement: "High",
      icon: <Building className="w-5 h-5 text-success-green" />
    },
    {
      segment: "Professional Sports Teams",
      size: "5K+ teams worldwide",
      revenue: "$200M potential",
      engagement: "High",
      icon: <Target className="w-5 h-5 text-sports-orange" />
    }
  ];

  const projections = [
    { year: "Year 1", users: "10K", revenue: "$500K", growth: "Launch" },
    { year: "Year 2", users: "50K", revenue: "$2.5M", growth: "400%" },
    { year: "Year 3", users: "200K", revenue: "$8M", growth: "220%" },
    { year: "Year 5", users: "1M+", revenue: "$25M", growth: "212%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Business Model
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sustainable Revenue
            <span className="block text-primary">Model</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple revenue streams ensure long-term sustainability while making 
            anti-doping education accessible and impactful.
          </p>
        </div>

        {/* Revenue streams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {revenueStreams.map((stream, index) => (
            <Card key={index} className="p-6 bg-card-gradient shadow-card hover:shadow-lg transition-smooth group">
              <div className="mb-4">
                <div className="bg-muted/20 rounded-full p-3 w-fit mb-4 group-hover:bg-muted/40 transition-smooth">
                  {stream.icon}
                </div>
                <Badge variant="outline" className={`mb-3 text-${stream.color}`}>
                  {stream.potential} Potential
                </Badge>
                <h3 className="text-lg font-bold mb-2">{stream.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{stream.description}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pricing:</span>
                  <span className="font-medium">{stream.pricing}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Market:</span>
                  <span className="font-medium text-right flex-1 ml-2">{stream.market}</span>
                </div>
              </div>
              
              <GradientButton variant="sports" size="sm" className="w-full">
                Learn More
              </GradientButton>
            </Card>
          ))}
        </div>

        {/* Market analysis */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 bg-card-gradient shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Market Segments</h3>
            </div>
            
            <div className="space-y-4">
              {marketAnalysis.map((segment, index) => (
                <div key={index} className="border rounded-lg p-4 bg-background/50">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-muted/20 rounded-full p-2">
                      {segment.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{segment.segment}</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Size: </span>
                          <span className="font-medium">{segment.size}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Revenue: </span>
                          <span className="font-medium">{segment.revenue}</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge variant="outline" className="text-xs">
                          {segment.engagement} Engagement
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card-gradient shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-success-green/10 rounded-full p-3">
                <DollarSign className="w-6 h-6 text-success-green" />
              </div>
              <h3 className="text-xl font-bold">Revenue Projections</h3>
            </div>
            
            <div className="space-y-4">
              {projections.map((projection, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <div>
                    <div className="font-bold">{projection.year}</div>
                    <div className="text-sm text-muted-foreground">{projection.users} users</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{projection.revenue}</div>
                    <Badge variant="outline" className="text-xs">
                      {projection.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-hero-gradient rounded-lg text-white text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-warning-yellow" />
              <div className="text-lg font-bold">5-Year Target</div>
              <div className="text-2xl font-bold">$25M ARR</div>
              <div className="text-sm text-white/80">Annual Recurring Revenue</div>
            </div>
          </Card>
        </div>

        {/* Key advantages */}
        <Card className="p-8 bg-hero-gradient text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Competitive Advantages</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our unique combination of technologies and educational approach creates multiple moats
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-fit mx-auto mb-3">
                <Target className="w-6 h-6 text-warning-yellow" />
              </div>
              <h4 className="font-bold mb-2">First-Mover Advantage</h4>
              <p className="text-sm text-white/80">
                Leading the gamified anti-doping education space
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-fit mx-auto mb-3">
                <Zap className="w-6 h-6 text-sports-orange" />
              </div>
              <h4 className="font-bold mb-2">Technology Integration</h4>
              <p className="text-sm text-white/80">
                Unique AR/VR and AI combination for education
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-fit mx-auto mb-3">
                <Users className="w-6 h-6 text-success-green" />
              </div>
              <h4 className="font-bold mb-2">Network Effects</h4>
              <p className="text-sm text-white/80">
                Community-driven content and peer learning
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};