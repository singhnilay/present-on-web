import { Badge } from "@/components/ui/badge";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  Trophy, 
  Code, 
  Users, 
  Mail,
  ExternalLink,
  Github,
  Linkedin
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-warning-yellow" />
              <span className="text-2xl font-bold">Tech Titans</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Revolutionizing anti-doping education through innovative technology, 
              gamification, and immersive learning experiences.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Smart India Hackathon 2024
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                SIH1722
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Team ID: 31295
              </Badge>
            </div>
            <GradientButton variant="orange" size="lg">
              Contact Team
            </GradientButton>
          </div>

          {/* Project info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Project Details</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Flutter & AR Technology</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>6 Team Members</span>
              </li>
              <li className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Smart Education Theme</span>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                <span>Software Category</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tech Stack</h4>
            <div className="space-y-2">
              <div className="text-white/80 text-sm">Frontend</div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  Flutter
                </Badge>
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  Dart
                </Badge>
              </div>
              
              <div className="text-white/80 text-sm">AR/VR</div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  ARCore
                </Badge>
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  ARKit
                </Badge>
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  Unity
                </Badge>
              </div>
              
              <div className="text-white/80 text-sm">Backend</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  Firebase
                </Badge>
                <Badge variant="outline" className="text-xs border-white/30 text-white/80">
                  ML Kit
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="font-bold text-lg mb-6 text-center">Key Platform Features</h4>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">AR Scanning</div>
              <div className="text-sm text-white/80">Substance Detection</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">Gamification</div>
              <div className="text-sm text-white/80">Interactive Learning</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">AI Learning</div>
              <div className="text-sm text-white/80">Personalized Paths</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">Social Features</div>
              <div className="text-sm text-white/80">Team Challenges</div>
            </div>
          </div>
        </div>

        {/* Revenue model summary */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="font-bold text-lg mb-4 text-center">Revenue Streams</h4>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div>
              <div className="font-bold text-lg mb-1">Corporate Training</div>
              <div className="text-sm text-white/80">Teams & Schools</div>
            </div>
            <div>
              <div className="font-bold text-lg mb-1">Subscriptions</div>
              <div className="text-sm text-white/80">Premium Content</div>
            </div>
            <div>
              <div className="font-bold text-lg mb-1">Sponsorships</div>
              <div className="text-sm text-white/80">Brand Partnerships</div>
            </div>
            <div>
              <div className="font-bold text-lg mb-1">In-App Purchases</div>
              <div className="text-sm text-white/80">Extra Modules</div>
            </div>
            <div>
              <div className="font-bold text-lg mb-1">Merchandising</div>
              <div className="text-sm text-white/80">Clean Sport Products</div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © 2024 Tech Titans - Smart India Hackathon 2024 Entry
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-white/80">Connect with us:</div>
            <div className="flex gap-2">
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth">
                <Github className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};