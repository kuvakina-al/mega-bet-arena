import { useState } from "react";
import { Star, Award, Clock, Users, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Import all logos
import logo0 from '@/assets/logos/brutal-casino-dark.png';
import logo1 from '@/assets/logos/captain-slots-dark.png';
import logo2 from '@/assets/logos/goldenplay-dark.png';
import logo3 from '@/assets/logos/julius-casino-dark.png';
import logo4 from '@/assets/logos/lucky-treasure-dark.png';
import logo5 from '@/assets/logos/ruby-vegas-dark.png';
import logo6 from '@/assets/logos/igobet-dark.png';
import logo7 from '@/assets/logos/sportuna-dark.png';
import logo8 from '@/assets/logos/alexander-casino-dark.png';
import logo9 from '@/assets/logos/wonaco-dark.png';
import logo10 from '@/assets/logos/candy-spinz-dark.png';
import logo11 from '@/assets/logos/spinrollz-dark.png';
import logo12 from '@/assets/logos/cashwin-dark.png';
import logo13 from '@/assets/logos/spinight-dark.png';
import logo14 from '@/assets/logos/casinolab-dark.png';
import logo15 from '@/assets/logos/casino-night-dark.png';
import logo16 from '@/assets/logos/pistolo-dark.png';
import logo17 from '@/assets/logos/coolzino-dark.png';
import logo18 from '@/assets/logos/casombie-dark.png';
import logo19 from '@/assets/logos/roby-casino-dark.png';
import logo20 from '@/assets/logos/crownplay-dark.png';
import logo21 from '@/assets/logos/fat-pirate-dark.png';
import logo22 from '@/assets/logos/talismania-dark.png';
import logo23 from '@/assets/logos/wazamba-dark.png';
import logo24 from '@/assets/logos/winsane-dark.png';
import logo25 from '@/assets/logos/amon-dark.png';
import logo26 from '@/assets/logos/bdm-bet-dark.png';
import logo27 from '@/assets/logos/betriot-dark.png';
import logo28 from '@/assets/logos/azur-casino-dark.png';
import logo29 from '@/assets/logos/slotuna-dark.png';
import logo30 from '@/assets/logos/betzino-dark.png';
import logo31 from '@/assets/logos/joker8-dark.png';
import logo32 from '@/assets/logos/quickwin-dark.png';
import logo33 from '@/assets/logos/my-empire-dark.png';
import logo34 from '@/assets/logos/malina-casino-dark.png';
import logo35 from '@/assets/logos/legiano-dark.png';
import logo36 from '@/assets/logos/wild-sultan-dark.png';
import logo37 from '@/assets/logos/banzai-casino-dark.png';
import logo38 from '@/assets/logos/spinsy-dark.png';

interface Casino {
  id: string;
  name: string;
  url: string;
  offerHeadline: string;
  offerSubheadline: string;
  buttonText: string;
  ratingText: string;
  rating: number;
  priority: number;
  logoUrl: string;
  features: string[];
}

const casinos: Casino[] = [
  {
    id: "2514363a-e003-49d3-9689-baad8609e6fc",
    name: "Brutal Casino",
    url: "https://media-tracking.com/116d786a-351e-4b43-9b55-860b1594d89a?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "50 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 0,
    logoUrl: "",
    features: ["Jeux Variés","Support 24/7","Bonus Généreux"]
  },
  {
    id: "c7ba32ac-033f-4067-8ad6-532d00467af9",
    name: "CaptainSlots",
    url: "https://media-tracking.com/ac2570da-1ee4-4cdb-b58c-7d0cd6e2d7dc?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "50 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 1,
    logoUrl: "",
    features: ["Large Sélection","Cashback","VIP Programme"]
  },
  {
    id: "c0f208a3-9a50-4c0f-a68a-a2f70ed2040c",
    name: "GoldenPlay",
    url: "https://media-tracking.com/c00b2833-3c19-4b68-9c2c-6b4c9b738d7e?source=ABC1",
    offerHeadline: "100% Jusqu'à 200€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 3,
    logoUrl: "",
    features: ["Design Premium","Support Français","Cashback"]
  },
  {
    id: "7279a3b2-b976-471d-8d22-6d0bdf7066a9",
    name: "Julius Casino",
    url: "https://media-tracking.com/d0ef7464-489b-4689-956a-84f2e757c213?source=ABC1",
    offerHeadline: "100% Jusqu'à 400€",
    offerSubheadline: "75 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 4,
    logoUrl: "",
    features: ["Live Casino","Mobile Optimisé","Paiements Rapides"]
  },
  {
    id: "ece12362-3f14-4dbe-a4af-ab1a12b796a1",
    name: "Lucky Treasure",
    url: "https://media-tracking.com/5f83cbd3-dce7-4dc2-a93f-4ee42c87b42d?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 5,
    logoUrl: "",
    features: ["Thème Trésor","Support 24/7","Bonus Généreux"]
  },
  {
    id: "ee823ef3-6e55-4452-ba21-823f0dd97c61",
    name: "Rubyvegas",
    url: "https://media-tracking.com/7dcac28a-95f8-40fa-bc44-c5f82c962dd2?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 6,
    logoUrl: "",
    features: ["Thème Vegas","Support 24/7","VIP Programme"]
  },
  {
    id: "a831a861-44ae-4b99-8b7e-b8e88d98e2ce",
    name: "IgoBet",
    url: "https://media-tracking.com/72e47f6f-2f2f-4d99-ba18-c9bcc34aaa3b?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 7,
    logoUrl: "",
    features: ["Paris Sportifs","Live Casino","Support Français"]
  },
  {
    id: "95cf53bf-f298-41fc-9195-ce842f160941",
    name: "Sportuna",
    url: "https://media-tracking.com/47ec9dd4-6f98-4df5-a3d7-26da9f6d5c8c?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 8,
    logoUrl: "",
    features: ["Paris Sportifs","Live Casino","Support Français"]
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
    priority: 9,
    logoUrl: "",
    features: ["Programme Fidélité","Promotions Spéciales","Offres VIP"]
  },
  {
    id: "453c6755-888f-4aa0-ab4d-f5f2a7cad173",
    name: "Wonaco",
    url: "https://media-tracking.com/88d6e9b1-4b7f-472a-9b13-8b6de8df7f38?source=ABC1",
    offerHeadline: "100% Jusqu'à 2000€",
    offerSubheadline: "200 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 10,
    logoUrl: "",
    features: ["Bonus Massif","Support 24/7","Large Sélection"]
  },
  {
    id: "735774b2-ee32-464a-b24e-598b14febe56",
    name: "Candy Spinz",
    url: "https://media-tracking.com/9d66abb4-9a42-4fa8-81f0-4f81e8f03210?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "200 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 11,
    logoUrl: "",
    features: ["Design Coloré","Slots Populaires","Support 24/7"]
  },
  {
    id: "a12d38c3-16bc-4aed-84e8-cfa5b07d1a81",
    name: "Spinrollz",
    url: "https://media-tracking.com/4a7f6ed6-2c52-45f8-93b1-5ed0c30d5d5a?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 12,
    logoUrl: "",
    features: ["Interface Moderne","Support Français","Cashback"]
  },
  {
    id: "4049bdb0-b469-44f3-884a-ce978238f127",
    name: "Cashwin",
    url: "https://media-tracking.com/d48df2f0-01cd-461e-b9c5-6b5f94099bd6?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 13,
    logoUrl: "",
    features: ["Paiements Rapides","Support 24/7","Bonus Réguliers"]
  },
  {
    id: "821335c3-354d-487d-bf62-c0cb7b79c447",
    name: "Spinight",
    url: "https://media-tracking.com/e53a4aa7-77f3-4e16-ae0f-3c4c66f55e7d?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 14,
    logoUrl: "",
    features: ["Jeux de Nuit","Support 24/7","Bonus Généreux"]
  },
  {
    id: "7c7f4101-e30a-413a-9de4-82ff45474db7",
    name: "Casinolab",
    url: "https://media-tracking.com/97e77b18-5a15-4ed7-84b8-8abc3f00d54e?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 15,
    logoUrl: "",
    features: ["Interface Moderne","Support 24/7","Jeux Variés"]
  },
  {
    id: "ecb5e0aa-563c-41bc-8a16-ca2e79fecd13",
    name: "Casinonight",
    url: "https://media-tracking.com/5e18f8aa-8c95-42d6-baa1-8f8c31354cb0?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 16,
    logoUrl: "",
    features: ["Live Casino","Support Français","Bonus Généreux"]
  },
  {
    id: "a568d162-e30a-4036-99f3-418a7f8d3b55",
    name: "Pistolo",
    url: "https://media-tracking.com/de37e72a-c9e3-434b-82e5-bc04efa58077?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 17,
    logoUrl: "",
    features: ["Thème Western","Support Français","Cashback"]
  },
  {
    id: "c6f9f141-5492-4bf9-9b3f-4622340623d3",
    name: "Coolzino",
    url: "https://media-tracking.com/73f34d77-ccb4-4a9a-94b3-6e0de1ae47a5?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 18,
    logoUrl: "",
    features: ["Jeux Variés","Support Français","Paiements Rapides"]
  },
  {
    id: "2760892e-5d38-40b9-aef6-3f6f7ea2a61a",
    name: "Casombie",
    url: "https://media-tracking.com/e3cf3c62-4395-413a-8094-0cc16485cb04?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 19,
    logoUrl: "",
    features: ["Thème Unique","Support 24/7","Jeux Populaires"]
  },
  {
    id: "f51073c4-ffe1-4ccf-8746-8ba833a6de56",
    name: "Roby",
    url: "https://media-tracking.com/1c0ef3a5-76ba-4c78-a5ce-7f3e2b3a46c6?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 20,
    logoUrl: "",
    features: ["Interface Simple","Support Français","Bonus Généreux"]
  },
  {
    id: "bd57cb90-9ad9-4a7f-8b0e-821b98cfbd3d",
    name: "Crown Play",
    url: "https://media-tracking.com/71877cc2-f3ab-4ab0-a9cf-f80e89e1d4a7?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 21,
    logoUrl: "",
    features: ["Programme VIP","Support 24/7","Bonus Réguliers"]
  },
  {
    id: "7e333616-de96-46e5-8caa-8a74b5a6aa22",
    name: "Fat Pirate",
    url: "https://media-tracking.com/3093d96f-4ac5-46f6-8b1b-ec5f4fc26f91?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 22,
    logoUrl: "",
    features: ["Thème Pirate","Support 24/7","Jeux Populaires"]
  },
  {
    id: "78d2377f-8498-4087-a874-9270e3601e87",
    name: "Talismania",
    url: "https://media-tracking.com/ac5a71d7-33a1-423c-9d71-a6b55c3f4c82?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 23,
    logoUrl: "",
    features: ["Thème Mystique","Support Français","Bonus Généreux"]
  },
  {
    id: "81e2f63d-343a-464e-b24e-102be73194d5",
    name: "Wazamba",
    url: "https://media-tracking.com/c2e01e90-2af7-46a8-a52e-b8b1e60ef1ae?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "200 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 24,
    logoUrl: "",
    features: ["Thème Tribal","Support Français","Jeux Variés"]
  },
  {
    id: "6c3cbeee-fb2d-43cd-b0c2-dcd5654f6582",
    name: "Winsane",
    url: "https://media-tracking.com/38e88ca0-49d7-45f1-9a0c-02877a0d8b8f?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 26,
    logoUrl: "",
    features: ["Design Fou","Support Français","Cashback"]
  },
  {
    id: "89a99b93-ff6c-4c86-8f50-5031d5286c65",
    name: "Amon",
    url: "https://media-tracking.com/b84f07e7-0a56-454a-be1f-0a40c1a3c732?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 27,
    logoUrl: "",
    features: ["Bonus de Bienvenue","Cashback","Support 24/7"]
  },
  {
    id: "581d36ff-2351-4a8e-8167-0d765475e2da",
    name: "BDMbet",
    url: "https://media-tracking.com/f0965b4c-8a00-43cb-806b-4903f5e0b62f?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "200 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 28,
    logoUrl: "",
    features: ["Paris Sportifs","Live Casino","Support Français"]
  },
  {
    id: "b7d500e5-e81b-4bd8-a2c6-201480793238",
    name: "Betriot",
    url: "https://media-tracking.com/df0d6c2a-44c3-4adf-829b-bcd6ffc09c6c?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 29,
    logoUrl: "",
    features: ["Paris Sportifs","Live Casino","Support Français"]
  },
  {
    id: "ee8d8471-f793-4681-a805-8c2a9be43379",
    name: "Azur",
    url: "https://media-tracking.com/3e11da0b-f1bc-4b85-b1b5-c74e95fbbdd4?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 30,
    logoUrl: "",
    features: ["Interface Moderne","Support 24/7","Paiements Rapides"]
  },
  {
    id: "840c629d-64f2-4b25-9921-cd12eff30053",
    name: "Slotuna",
    url: "https://media-tracking.com/7c0d18bf-6f8d-4766-9b62-f68d5b6a0d48?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 31,
    logoUrl: "",
    features: ["Large Sélection de Slots","Support 24/7","Bonus Réguliers"]
  },
  {
    id: "d959c567-bdb1-42c7-8c29-f7132e7b94ef",
    name: "Betzino",
    url: "https://media-tracking.com/cddc0a25-93eb-4c37-a8f0-d43ad8ff5210?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 32,
    logoUrl: "",
    features: ["Bonus Généreux","Support 24/7","Jeux Populaires"]
  },
  {
    id: "a9398891-0905-4f98-87a7-ba92348b84de",
    name: "Joker8",
    url: "https://media-tracking.com/4fe6f5a6-ef96-4b11-abfa-3c7e01cb4d44?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 33,
    logoUrl: "",
    features: ["Thème Unique","Support Français","Jeux Variés"]
  },
  {
    id: "1ef5875b-dc54-47cf-9d82-03cb1868fd58",
    name: "Quickwin",
    url: "https://media-tracking.com/d5dbc35e-2281-4bcb-b17a-4e99e73e35b5?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 34,
    logoUrl: "",
    features: ["Paiements Rapides","Support 24/7","Interface Moderne"]
  },
  {
    id: "5f9e24c8-f279-4bd5-886f-feceaf98a437",
    name: "Myempire",
    url: "https://media-tracking.com/6e5a3a35-1d82-4e17-9aa7-d5c882f79856?source=ABC1",
    offerHeadline: "100% Jusqu'à 100€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 35,
    logoUrl: "",
    features: ["Thème Empire","Support Français","Bonus Réguliers"]
  },
  {
    id: "4daed65a-e6ef-465b-a4d4-fa48e78d4fb2",
    name: "Malina",
    url: "https://media-tracking.com/3a7c1e84-c35d-40c9-8e5d-0a8cde8f4ff8?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 36,
    logoUrl: "",
    features: ["Design Élégant","Support 24/7","VIP Programme"]
  },
  {
    id: "f5bcf13e-6a41-4740-8bdb-4d7837034066",
    name: "Legiano",
    url: "https://media-tracking.com/fcc62d6d-e73b-4e11-b7b1-84f47ced19e7?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 37,
    logoUrl: "",
    features: ["Design Moderne","Support 24/7","Cashback"]
  },
  {
    id: "d1cfd65b-b591-4b2d-9fbc-322e3bc3fa39",
    name: "Wild Sultan",
    url: "https://media-tracking.com/0c60d2ac-d19c-4963-8a41-4fe3d44e5efa?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 38,
    logoUrl: "",
    features: ["Thème Oriental","Support 24/7","VIP Programme"]
  },
  {
    id: "aed220cd-39b4-4fa6-a801-1e8d9db56752",
    name: "Banzaislots",
    url: "https://media-tracking.com/4ef83a02-c71b-4d5d-883f-e5a96fb3bf21?source=ABC1",
    offerHeadline: "100% Jusqu'à 250€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 39,
    logoUrl: "",
    features: ["Slots Populaires","Cashback","VIP Programme"]
  },
  {
    id: "5b05c60f-3842-4b8e-bc29-707c36a7ca67",
    name: "Spinsy",
    url: "https://media-tracking.com/ba81e6c1-cd33-4a9e-9b8d-d5af3e45a5fc?source=ABC1",
    offerHeadline: "100% Jusqu'à 500€",
    offerSubheadline: "100 Tours Gratuits",
    buttonText: "Visit Casino",
    ratingText: "Excellent",
    rating: 5,
    priority: 41,
    logoUrl: "",
    features: ["Design Simple","Support 24/7","Jeux Populaires"]
  }
];

const logoMap: Record<string, string> = {
  "2514363a-e003-49d3-9689-baad8609e6fc": logo0,
  "c7ba32ac-033f-4067-8ad6-532d00467af9": logo1,
  "c0f208a3-9a50-4c0f-a68a-a2f70ed2040c": logo2,
  "7279a3b2-b976-471d-8d22-6d0bdf7066a9": logo3,
  "ece12362-3f14-4dbe-a4af-ab1a12b796a1": logo4,
  "ee823ef3-6e55-4452-ba21-823f0dd97c61": logo5,
  "a831a861-44ae-4b99-8b7e-b8e88d98e2ce": logo6,
  "95cf53bf-f298-41fc-9195-ce842f160941": logo7,
  "5cdfe7a1-37e8-4067-a4ae-57838692b87e": logo8,
  "453c6755-888f-4aa0-ab4d-f5f2a7cad173": logo9,
  "735774b2-ee32-464a-b24e-598b14febe56": logo10,
  "a12d38c3-16bc-4aed-84e8-cfa5b07d1a81": logo11,
  "4049bdb0-b469-44f3-884a-ce978238f127": logo12,
  "821335c3-354d-487d-bf62-c0cb7b79c447": logo13,
  "7c7f4101-e30a-413a-9de4-82ff45474db7": logo14,
  "ecb5e0aa-563c-41bc-8a16-ca2e79fecd13": logo15,
  "a568d162-e30a-4036-99f3-418a7f8d3b55": logo16,
  "c6f9f141-5492-4bf9-9b3f-4622340623d3": logo17,
  "2760892e-5d38-40b9-aef6-3f6f7ea2a61a": logo18,
  "f51073c4-ffe1-4ccf-8746-8ba833a6de56": logo19,
  "bd57cb90-9ad9-4a7f-8b0e-821b98cfbd3d": logo20,
  "7e333616-de96-46e5-8caa-8a74b5a6aa22": logo21,
  "78d2377f-8498-4087-a874-9270e3601e87": logo22,
  "81e2f63d-343a-464e-b24e-102be73194d5": logo23,
  "6c3cbeee-fb2d-43cd-b0c2-dcd5654f6582": logo24,
  "89a99b93-ff6c-4c86-8f50-5031d5286c65": logo25,
  "581d36ff-2351-4a8e-8167-0d765475e2da": logo26,
  "b7d500e5-e81b-4bd8-a2c6-201480793238": logo27,
  "ee8d8471-f793-4681-a805-8c2a9be43379": logo28,
  "840c629d-64f2-4b25-9921-cd12eff30053": logo29,
  "d959c567-bdb1-42c7-8c29-f7132e7b94ef": logo30,
  "a9398891-0905-4f98-87a7-ba92348b84de": logo31,
  "1ef5875b-dc54-47cf-9d82-03cb1868fd58": logo32,
  "5f9e24c8-f279-4bd5-886f-feceaf98a437": logo33,
  "4daed65a-e6ef-465b-a4d4-fa48e78d4fb2": logo34,
  "f5bcf13e-6a41-4740-8bdb-4d7837034066": logo35,
  "d1cfd65b-b591-4b2d-9fbc-322e3bc3fa39": logo36,
  "aed220cd-39b4-4fa6-a801-1e8d9db56752": logo37,
  "5b05c60f-3842-4b8e-bc29-707c36a7ca67": logo38,
};

// Utility functions
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

const extractMinDeposit = (offerHeadline: string): string => {
  const match = offerHeadline.match(/(\d+)€/);
  return match ? `${match[1]}€` : "10€";
};

const CasinoShowcase = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Header with backdrop blur */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 py-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Meilleurs Casinos en Ligne 2025
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Découvrez notre sélection exclusive de casinos avec slots, blackjack, roulette et bien plus pour les joueurs passionnés
          </p>
        </div>
      </header>

      {/* Casino Grid */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          {casinos.map((casino) => {
            const imageLoaded = loadedImages[casino.id] || false;
            const freeSpins = extractFreeSpins(casino.offerSubheadline);
            const activePlayers = generateActivePlayers(casino.id, casino.priority);
            const countdown = generateCountdown(casino.id);
            const minDeposit = extractMinDeposit(casino.offerHeadline);

            return (
              <Card
                key={casino.id}
                className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 bg-card/95 backdrop-blur-sm"
              >
                {/* Recommended Badge for 5-star casinos */}
                {casino.rating === 5 && (
                  <Badge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    <Award className="h-3 w-3 mr-1" />
                    Recommandé
                  </Badge>
                )}

                <a
                  href={casino.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block"
                >
                  <div className="p-6">
                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                      {/* Column 1: Logo & Rating */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-2">
                          {!imageLoaded && (
                            <Skeleton className="w-full h-full" />
                          )}
                          <img
                            src={logoMap[casino.id]}
                            alt={`${casino.name} logo`}
                            loading="lazy"
                            className={`w-full h-full object-contain transition-opacity duration-300 ${
                              imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() =>
                              setLoadedImages((prev) => ({ ...prev, [casino.id]: true }))
                            }
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="flex gap-0.5 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">{casino.ratingText}</span>
                        </div>
                      </div>

                      {/* Column 2: Offer Details */}
                      <div className="flex flex-col items-center md:items-start space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                          {casino.offerHeadline}
                        </h2>
                        {freeSpins && (
                          <Badge className="text-base md:text-lg px-4 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                            <Gift className="h-5 w-5 mr-2" />
                            {freeSpins} Tours Gratuits
                          </Badge>
                        )}
                      </div>

                      {/* Column 3: CTA */}
                      <div className="flex flex-col items-center space-y-2">
                        <Button
                          size="lg"
                          className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold whitespace-nowrap shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
                        >
                          <span className="mr-2">Jouer Maintenant</span>
                          <ArrowRight className="h-5 w-5 hidden sm:block" />
                        </Button>
                        <span className="text-xs text-muted-foreground">
                          {casino.priority <= 2 ? (
                            <span className="flex items-center gap-1 text-green-500">
                              <Users className="h-3 w-3" />
                              {activePlayers} joueurs actifs
                            </span>
                          ) : (
                            "Bonus activable en 2 min"
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Info Row */}
                    <div className="mt-6 pt-4 border-t border-border/40 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                      <span>Dépôt min: {minDeposit}</span>
                      <span>•</span>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                            <ShieldCheck className="h-3 w-3 mr-1" />
                            Vérifié
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="h-4 w-4 text-green-500" />
                              <span className="text-sm">SSL Sécurisé</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">Retraits 24h</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm">Licence Valide</span>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                      {casino.priority <= 2 && (
                        <>
                          <span>•</span>
                          <Badge variant="destructive" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Expire dans {countdown}
                          </Badge>
                        </>
                      )}
                      <span>•</span>
                      <span className="text-[12px]">T&Cs s'appliquent. 18+</span>
                    </div>
                  </div>
                </a>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CasinoShowcase;
