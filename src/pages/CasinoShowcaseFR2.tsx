import { useState, useEffect } from "react";
import { Star, Award, Clock, Users, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Import logos
import logo0 from '@/assets/logos/trickz-dark.png';
import logo1 from '@/assets/logos/spinbara-dark.png';
import logo2 from '@/assets/logos/brutal-casino-dark.png';
import logo3 from '@/assets/logos/goldenplay-dark.png';
import logo4 from '@/assets/logos/lucky-treasure-dark.png';
import logo5 from '@/assets/logos/alexander-casino-dark.png';
import logo6 from '@/assets/logos/azur-casino-dark.png';
import logo7 from '@/assets/logos/betzino-dark.png';
import logo8 from '@/assets/logos/banzai-casino-dark.png';

const logoMap: Record<string, string> = {
  "f4d42173-a955-4b52-9dc8-fdbaa6aa2a5b": logo0,
  "731234be-d664-4b3a-bdeb-31d5e4b1458c": logo1,
  "2514363a-e003-49d3-9689-baad8609e6fc": logo2,
  "c0f208a3-9a50-4c0f-a68a-a2f70ed2040c": logo3,
  "ece12362-3f14-4dbe-a4af-ab1a12b796a1": logo4,
  "5cdfe7a1-37e8-4067-a4ae-57838692b87e": logo5,
  "ee8d8471-f793-4681-a805-8c2a9be43379": logo6,
  "d959c567-bdb1-42c7-8c29-f7132e7b94ef": logo7,
  "aed220cd-39b4-4fa6-a801-1e8d9db56752": logo8,
};

const casinos = [
  {
    id: "f4d42173-a955-4b52-9dc8-fdbaa6aa2a5b",
    name: "Trickz",
    url: "https://media-tracking.com/d513d5ad-0cc9-4870-ae76-7d1de260aa48?source=ABC1",
    offerHeadline: "150 % jusqu'à 1000 €",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Nouveau",
    rating: 5,
    priority: 0,
    features: ["Nouveau Casino","Cryptos Acceptées","Tournois Hebdomadaire"]
  },
  {
    id: "731234be-d664-4b3a-bdeb-31d5e4b1458c",
    name: "Spinbara",
    url: "https://media-tracking.com/46eff119-def3-4ec5-9cc7-f9b51f30349e?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "200 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Nouveau",
    rating: 5,
    priority: 0,
    features: ["Casino Mobile","Support 24/7","Paiements Rapides"]
  },
  {
    id: "2514363a-e003-49d3-9689-baad8609e6fc",
    name: "Brutal Casino",
    url: "https://media-tracking.com/116d786a-351e-4b43-9b55-860b1594d89a?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "50 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 1,
    features: ["Jeux Variés","Support 24/7","Bonus Généreux"]
  },
  {
    id: "c0f208a3-9a50-4c0f-a68a-a2f70ed2040c",
    name: "GoldenPlay",
    url: "https://media-tracking.com/6aa1d5af-de95-4888-83d8-1651a491c491?source=ABC1",
    offerHeadline: "100% Jusqu'à 200€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 3,
    features: ["Design Premium","Support Français","Cashback"]
  },
  {
    id: "ece12362-3f14-4dbe-a4af-ab1a12b796a1",
    name: "Lucky Treasure",
    url: "https://media-tracking.com/004be7cc-bd07-4550-8689-712be0b0de47?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 4,
    features: ["Thème Trésor","Support 24/7","Bonus Généreux"]
  },
  {
    id: "5cdfe7a1-37e8-4067-a4ae-57838692b87e",
    name: "Alexander",
    url: "https://media-tracking.com/ff387e37-c622-4108-b0a7-8708d5ec0775?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 5,
    features: ["Programme Fidélité","Promotions Spéciales","Offres VIP"]
  },
  {
    id: "ee8d8471-f793-4681-a805-8c2a9be43379",
    name: "Azur",
    url: "https://media-tracking.com/a5358fbe-472c-4671-ad72-1f3f6864f7d8?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 6,
    features: ["Interface Moderne","Support 24/7","Paiements Rapides"]
  },
  {
    id: "d959c567-bdb1-42c7-8c29-f7132e7b94ef",
    name: "Betzino",
    url: "https://media-tracking.com/3d662189-0691-44da-8908-835ba905c101?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 7,
    features: ["Bonus Généreux","Support 24/7","Jeux Populaires"]
  },
  {
    id: "aed220cd-39b4-4fa6-a801-1e8d9db56752",
    name: "Banzaislots",
    url: "https://media-tracking.com/376343dd-c41e-4e6c-b10c-919d0d80a81d?source=ABC1",
    offerHeadline: "100% Jusqu'à 250€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 8,
    features: ["Slots Populaires","Cashback","VIP Programme"]
  }
];

const CasinoShowcaseFR2 = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const generateActivePlayers = (casinoId: string, priority: number): number => {
    const hash = casinoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const uniqueSeed = hash * 7919;
    const timeSlot = Math.floor(Date.now() / 30000);
    const timeSeed = timeSlot * 541;
    const seed = uniqueSeed + timeSeed;
    const min = priority <= 2 ? 1800 : 800;
    const max = priority <= 2 ? 2500 : 1500;
    return min + (Math.abs(seed) % (max - min));
  };

  const generateCountdown = (casinoId: string): string => {
    const hash = casinoId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const timeSlot = Math.floor(Date.now() / 30000);
    const seed = hash + timeSlot;
    const hours = (seed % 24) + 1;
    const minutes = (seed * 7) % 60;
    return `${hours}h ${minutes}m`;
  };

  const extractFreeSpins = (text: string): number | null => {
    const patterns = [
      /(\d+)\s*(Tours Gratuits|Free Spins|Rodadas Grátis|Gratis Spins)/i,
      /(\d+)\s*FS/i
    ];
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return parseInt(match[1]);
    }
    return null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadedImages(prev => ({ ...prev }));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="backdrop-blur-sm bg-background/50 rounded-2xl p-8 md:p-12 text-center border border-border/50">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Meilleurs Casinos en Ligne 2025
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Découvrez notre sélection premium de casinos en ligne avec slots, blackjack, roulette et jeux variés pour tous les passionnés
            </p>
          </div>
        </div>
      </header>

      {/* Casino Grid */}
      <main className="container mx-auto px-4 pb-16 max-w-[900px]">
        <div className="space-y-8">
          {casinos.map((casino) => {
            const imageLoaded = loadedImages[casino.id] || false;
            const activePlayers = generateActivePlayers(casino.id, casino.priority);
            const freeSpins = extractFreeSpins(casino.offerSubheadline);

            return (
              <a
                key={casino.id}
                href={casino.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block group"
              >
                <Card className="relative overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  {/* Recommandé Badge */}
                  {casino.rating === 5 && (
                    <div className="absolute top-0 left-0 z-10">
                      <Badge className="rounded-none rounded-br-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 px-4 py-1.5 font-semibold">
                        <Award className="w-4 h-4 mr-1" />
                        Recommandé
                      </Badge>
                    </div>
                  )}

                  {/* Main Card Content */}
                  <div className="p-6 md:p-8 pt-12 md:pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-center">
                      {/* Column 1: Logo & Rating */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center bg-background/50 rounded-lg p-3">
                          {!imageLoaded && (
                            <Skeleton className="w-full h-full rounded" />
                          )}
                          <img
                            src={logoMap[casino.id]}
                            alt={`${casino.name} logo`}
                            className={`max-w-full max-h-full object-contain ${!imageLoaded ? 'hidden' : ''}`}
                            loading="lazy"
                            onLoad={() => setLoadedImages(prev => ({ ...prev, [casino.id]: true }))}
                          />
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {casino.ratingText}
                        </span>
                      </div>

                      {/* Column 2: Offer Details */}
                      <div className="flex flex-col items-center md:items-start space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                          {casino.offerHeadline}
                        </h2>
                        {freeSpins && (
                          <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-lg px-4 py-2 border-0">
                            <Gift className="w-5 h-5 mr-2" />
                            {freeSpins} Tours Gratuits
                          </Badge>
                        )}
                      </div>

                      {/* Column 3: CTA */}
                      <div className="flex flex-col items-center space-y-2">
                        <Button 
                          size="lg" 
                          className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold whitespace-nowrap px-8"
                        >
                          {casino.buttonText}
                          <ArrowRight className="w-5 h-5 ml-2 hidden sm:block" />
                        </Button>
                        <span className="text-xs text-muted-foreground flex items-center">
                          {casino.priority <= 2 ? (
                            <>
                              <Users className="w-3 h-3 mr-1 text-green-500" />
                              {activePlayers.toLocaleString()} joueurs actifs
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 mr-1" />
                              Bonus activable en 2 min
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Info Row */}
                    <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                      <span>Dépôt min: 10€</span>
                      <span className="hidden sm:inline">•</span>
                      
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button className="flex items-center hover:text-foreground transition-colors">
                            <ShieldCheck className="w-3 h-3 mr-1 text-green-500" />
                            Vérifié
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <ShieldCheck className="w-4 h-4 mr-2 text-green-500" />
                              <span>SSL Sécurisé</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="w-4 h-4 mr-2 text-blue-500" />
                              <span>Retraits 24h</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Award className="w-4 h-4 mr-2 text-yellow-500" />
                              <span>Casino Licencié</span>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>

                      {casino.priority <= 2 && (
                        <>
                          <span className="hidden sm:inline">•</span>
                          <Badge variant="destructive" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            Expire dans {generateCountdown(casino.id)}
                          </Badge>
                        </>
                      )}

                      <span className="hidden sm:inline">•</span>
                      <span className="text-xs">T&Cs s'appliquent. 18+</span>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CasinoShowcaseFR2;
