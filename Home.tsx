import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiTwitch, SiYoutube, SiTiktok, SiKick } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@assets/1604d776-45cd-4c6f-b0cb-6af12c60b5d7-profile_image-300x300_1760783824124.png";

const platforms = [
  { 
    name: "Twitch", 
    icon: SiTwitch, 
    url: "https://twitch.tv/trimoo7",
    color: "from-purple-600 to-purple-800",
    hoverGlow: "hover:shadow-purple-500/50"
  },
  { 
    name: "YouTube", 
    icon: SiYoutube, 
    url: "https://youtube.com/@trimoo",
    color: "from-red-600 to-red-800",
    hoverGlow: "hover:shadow-red-500/50"
  },
  { 
    name: "TikTok", 
    icon: SiTiktok, 
    url: "https://www.tiktok.com/@xtrimoo?_t=ZM-90eMpsI750y&_r=1",
    color: "from-pink-600 to-pink-800",
    hoverGlow: "hover:shadow-pink-500/50"
  },
  { 
    name: "Kick", 
    icon: SiKick, 
    url: "https://kick.com/trimoo",
    color: "from-green-600 to-green-800",
    hoverGlow: "hover:shadow-green-500/50"
  },
];

const sponsors = [
  {
    name: "OperaGX",
    description: "The Gaming Browser",
    url: "https://operagx.gg/trimoo7aff",
  },
  {
    name: "Skinsplace",
    description: "Premium Skins Trading",
    url: "https://skin.place/?gad_source=1&gad_campaignid=22433994699&gbraid=0AAAAAqUTQW7nSoPmhl9UA4BGNalm0GcWd&gclid=Cj0KCQjw9czHBhCyARIsAFZlN8SJKLOCd_N7vnDHaKKeeLfP_1u7uw-Yxzx2LB3kagB3va_F1FvkuhoaAhQXEALw_wcB",
  },
];

export default function Home() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("trimoo_visited");
    if (!hasVisited) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    localStorage.setItem("trimoo_visited", "true");
    localStorage.setItem("trimoo_source", platform);
    setTimeout(() => {
      setShowWelcomeModal(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-chart-2 p-0.5">
              <img 
                src={profileImage} 
                alt="TrimoO" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              TrimoO
            </span>
          </div>
        </div>
      </header>

      <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
        <DialogContent 
          className="sm:max-w-2xl bg-card/95 backdrop-blur-xl border-2 border-primary/20"
          data-testid="dialog-welcome"
        >
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent font-heading">
              Welcome to TrimoO's Community!
            </DialogTitle>
            <DialogDescription className="text-center text-lg text-muted-foreground pt-2">
              Where did you hear about me?
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-6">
            {platforms.map((platform) => (
              <Card
                key={platform.name}
                onClick={() => handlePlatformSelect(platform.name)}
                data-testid={`button-platform-${platform.name.toLowerCase()}`}
                className="border-2 hover-elevate active-elevate-2 hover:scale-105 transition-all duration-200 hover:border-primary/50 cursor-pointer overflow-visible"
              >
                <div className="p-8 flex flex-col items-center justify-center gap-3">
                  <platform.icon className="w-12 h-12 md:w-14 md:h-14" />
                  <span className="text-lg font-semibold">{platform.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/10 animate-gradient-slow"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <section className="min-h-screen flex items-center justify-center px-4 py-16">
            <div className="max-w-6xl w-full text-center">
              <motion.div 
                className="mb-12 flex justify-center"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-chart-2 p-1">
                    <img 
                      src={profileImage} 
                      alt="TrimoO Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent tracking-tight font-heading"
                data-testid="text-hero-title"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                TrimoO
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Professional Streamer & Content Creator
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-16"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join the community and catch the latest streams, highlights, and exclusive content across all platforms
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-24">
                {platforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-platform-${platform.name.toLowerCase()}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className={`aspect-square p-6 flex flex-col items-center justify-center gap-4 bg-gradient-to-br ${platform.color} border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl ${platform.hoverGlow} cursor-pointer group`}>
                      <platform.icon className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:scale-110 transition-transform" />
                      <span className="text-base md:text-lg font-semibold text-white">{platform.name}</span>
                      <ExternalLink className="w-4 h-4 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Card>
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
                  Proudly Sponsored By
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {sponsors.map((sponsor, index) => (
                    <motion.a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-sponsor-${sponsor.name.toLowerCase()}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                    >
                      <Card className="p-8 md:p-12 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 group cursor-pointer">
                        <div className="flex flex-col items-center gap-4">
                          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent font-heading">
                            {sponsor.name}
                          </div>
                          <p className="text-muted-foreground text-sm md:text-base">{sponsor.description}</p>
                          <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

      <footer className="relative z-10 border-t border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 TrimoO. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {platforms.map((platform) => (
                <a
                  key={`footer-${platform.name}`}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${platform.name.toLowerCase()}`}
                >
                  <platform.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradient-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-gradient-slow {
          animation: gradient-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      }`}</style>
    </div>
  );
}
