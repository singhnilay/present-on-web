import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Gamepad2, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Anti-doping education platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/90"></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 animate-float">
          <Trophy className="w-8 h-8 text-warning-yellow opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="w-10 h-10 text-success-green opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Gamepad2 className="w-9 h-9 text-accent opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-7 h-7 text-warning-yellow opacity-60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Hackathon2.0 2024 - Team Infinity
          </Badge>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Gamification of
            <span className="block bg-gradient-to-r from-warning-yellow to-sports-orange bg-clip-text text-transparent">
              Anti-Doping
            </span>
            Education
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Interactive learning platform that educates young athletes on anti-doping through 
            gamified quizzes, AR substance scanning, VR simulations, and AI-personalized learning.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Gamepad2 className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Gamified Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-success-green" />
              <span className="text-sm font-medium">AR Scanning</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Trophy className="w-5 h-5 text-warning-yellow" />
              <span className="text-sm font-medium">Rewards System</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="hero" size="xl" className="animate-glow">
              Explore the Platform
            </GradientButton>
            <GradientButton variant="orange" size="xl">
              View Demo
            </GradientButton>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30"></div>
    </section>
  );
};