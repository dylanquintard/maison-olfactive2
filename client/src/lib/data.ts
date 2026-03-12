// MAISON OLFACTIVE — Données produits et collections
// Direction: Maison Vivante / Retenue Sensorielle

export interface Product {
  id: string;
  slug: string;
  name: string;
  collection: string;
  collectionSlug: string;
  category: 'bougie' | 'encens' | 'diffuseur' | 'parfum-ambiance' | 'coffret';
  price: number;
  format: string;
  olfactiveFamily: string;
  notes: string[];
  ambiance: string;
  whenToLight: string;
  composition: string;
  usage: string;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  products: string[];
}

// Images CDN
const IMAGES = {
  hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430853534/mbbBJJ88WnQgWt6us3RDiT/hero-ambiance-eZB3mqx6pDsCM3CMjfKYkb.webp',
  cuisineLente: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430853534/mbbBJJ88WnQgWt6us3RDiT/collection-cuisine-lente-6xb2WqeVHPUSpFPn4tUZny.webp',
  dimancheMatin: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430853534/mbbBJJ88WnQgWt6us3RDiT/collection-dimanche-matin-NzMXcgqtfg7gBEG9YNXdud.webp',
  zesteFeu: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430853534/mbbBJJ88WnQgWt6us3RDiT/collection-zeste-feu-9rVrBfxPTUCF2EyxEUuz9B.webp',
  herbesChaudes: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663430853534/mbbBJJ88WnQgWt6us3RDiT/collection-herbes-chaudes-7JX4AbuFfh3dKVk68jBhPt.webp',
};

export { IMAGES };

export const collections: Collection[] = [
  {
    id: 'cuisine-lente',
    slug: 'cuisine-lente',
    name: 'Cuisine lente',
    tagline: 'Senteurs épicées et enveloppantes pour les heures calmes.',
    description: 'Des notes enveloppantes inspirées des cuisines chaudes, des gestes calmes et des épices douces. Pour les après-midis qui s\'étirent, les fours qui ronronnent, les tables encore tièdes.',
    image: IMAGES.cuisineLente,
    color: '#C97C5D',
    products: ['cannelle-douce', 'four-chaud', 'bois-blond', 'ecorce'],
  },
  {
    id: 'dimanche-matin',
    slug: 'dimanche-matin',
    name: 'Dimanche matin',
    tagline: 'Linge, agrumes et lumière claire pour les matins calmes.',
    description: 'La lumière qui entre par les fenêtres, le linge propre, un thé posé sur la table. Des senteurs légères et claires pour les matins sans hâte.',
    image: IMAGES.dimancheMatin,
    color: '#A8B29A',
    products: ['zeste-clair', 'lin-propre', 'the-blond', 'miel-pale'],
  },
  {
    id: 'zeste-feu',
    slug: 'zeste-feu',
    name: 'Zeste & feu',
    tagline: 'Agrumes, épices et fumée douce pour les fins de journée.',
    description: 'L\'énergie chaude d\'une fin de journée. Des agrumes vifs qui rencontrent la fumée douce et les épices. Pour allumer une bougie quand la lumière baisse.',
    image: IMAGES.zesteFeu,
    color: '#D98B4F',
    products: ['orange-fumee', 'epices-vives', 'ambre-zeste', 'flamme-douce'],
  },
  {
    id: 'herbes-chaudes',
    slug: 'herbes-chaudes',
    name: 'Herbes chaudes',
    tagline: 'Sauge, romarin et bois clair pour les espaces végétaux.',
    description: 'La matière végétale dans ce qu\'elle a de plus simple et de plus vrai. Sauge, romarin, thym, un bois clair en fond. Pour les pièces qui respirent.',
    image: IMAGES.herbesChaudes,
    color: '#A8B29A',
    products: ['sauge-lente', 'tisane-verte', 'feuille-tiede', 'jardin-sec'],
  },
];

export const products: Product[] = [
  // Cuisine lente
  {
    id: 'cannelle-douce',
    slug: 'cannelle-douce',
    name: 'Cannelle douce',
    collection: 'Cuisine lente',
    collectionSlug: 'cuisine-lente',
    category: 'bougie',
    price: 28,
    format: 'Bougie en verre ambré — 180g — 40h',
    olfactiveFamily: 'Épicé doux',
    notes: ['Cannelle', 'Cardamome', 'Bois blond'],
    ambiance: 'Pour les cuisines lentes, les fins d\'après-midi et les pièces baignées d\'une lumière chaude.',
    whenToLight: 'En fin de journée, pendant un repas préparé lentement ou pour réchauffer une pièce calme.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation. Ne pas brûler plus de 4h consécutives.',
    image: IMAGES.cuisineLente,
    isBestSeller: true,
  },
  {
    id: 'four-chaud',
    slug: 'four-chaud',
    name: 'Four chaud',
    collection: 'Cuisine lente',
    collectionSlug: 'cuisine-lente',
    category: 'bougie',
    price: 28,
    format: 'Bougie en verre ambré — 180g — 40h',
    olfactiveFamily: 'Gourmand doux',
    notes: ['Pain chaud', 'Vanille légère', 'Beurre'],
    ambiance: 'L\'odeur du four allumé, d\'une pâte qui lève, d\'un dimanche qui commence bien.',
    whenToLight: 'Le matin, pendant la préparation du petit-déjeuner, ou pour réchauffer une cuisine froide.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation.',
    image: IMAGES.cuisineLente,
    isNew: true,
  },
  {
    id: 'bois-blond',
    slug: 'bois-blond',
    name: 'Bois blond',
    collection: 'Cuisine lente',
    collectionSlug: 'cuisine-lente',
    category: 'bougie',
    price: 32,
    format: 'Bougie en céramique mate — 220g — 50h',
    olfactiveFamily: 'Boisé doux',
    notes: ['Cèdre clair', 'Santal', 'Miel de fleurs'],
    ambiance: 'La chaleur d\'un bois clair, d\'une table en chêne, d\'un parquet qui craque doucement.',
    whenToLight: 'En soirée, pour créer une atmosphère chaude et enveloppante dans le salon.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Tailler la mèche à 5mm avant chaque utilisation.',
    image: IMAGES.cuisineLente,
    isBestSeller: true,
  },
  {
    id: 'ecorce',
    slug: 'ecorce',
    name: 'Écorce',
    collection: 'Cuisine lente',
    collectionSlug: 'cuisine-lente',
    category: 'encens',
    price: 18,
    format: 'Encens en bâtonnets — 20 pièces',
    olfactiveFamily: 'Boisé épicé',
    notes: ['Bois de santal', 'Poivre noir', 'Résine'],
    ambiance: 'Un encens profond et chaud, pour les moments de calme et de recueillement.',
    whenToLight: 'En méditation, en fin de journée, pour marquer une transition.',
    composition: 'Poudre de bois naturelle, huiles essentielles, sans charbon.',
    usage: 'Brûler dans un porte-encens adapté. Ne jamais laisser sans surveillance.',
    image: IMAGES.cuisineLente,
  },

  // Dimanche matin
  {
    id: 'zeste-clair',
    slug: 'zeste-clair',
    name: 'Zeste clair',
    collection: 'Dimanche matin',
    collectionSlug: 'dimanche-matin',
    category: 'bougie',
    price: 28,
    format: 'Bougie en verre clair — 180g — 40h',
    olfactiveFamily: 'Agrumes frais',
    notes: ['Orange douce', 'Citron', 'Fleur d\'oranger'],
    ambiance: 'La lumière du matin, un zeste coupé, l\'air frais d\'une cuisine ouverte.',
    whenToLight: 'Le matin, pour commencer la journée avec légèreté et clarté.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation.',
    image: IMAGES.dimancheMatin,
    isBestSeller: true,
  },
  {
    id: 'lin-propre',
    slug: 'lin-propre',
    name: 'Lin propre',
    collection: 'Dimanche matin',
    collectionSlug: 'dimanche-matin',
    category: 'parfum-ambiance',
    price: 34,
    format: 'Spray d\'ambiance — 100ml',
    olfactiveFamily: 'Linge frais',
    notes: ['Lin', 'Coton blanc', 'Iris'],
    ambiance: 'L\'odeur d\'un linge propre plié, d\'un drap encore tiède, d\'une maison aérée.',
    whenToLight: 'Sur les textiles, dans les pièces à vivre, après le ménage.',
    composition: 'Eau purifiée, alcool végétal, fragrance sans phtalates.',
    usage: 'Vaporiser à 30cm de distance. Éviter les surfaces délicates.',
    image: IMAGES.dimancheMatin,
    isNew: true,
  },
  {
    id: 'the-blond',
    slug: 'the-blond',
    name: 'Thé blond',
    collection: 'Dimanche matin',
    collectionSlug: 'dimanche-matin',
    category: 'bougie',
    price: 28,
    format: 'Bougie en verre clair — 180g — 40h',
    olfactiveFamily: 'Thé & floral',
    notes: ['Thé blanc', 'Jasmin', 'Musc doux'],
    ambiance: 'Une tasse posée sur la table, la vapeur qui monte, le calme d\'un matin sans hâte.',
    whenToLight: 'Le matin ou en début d\'après-midi, pour une atmosphère douce et sereine.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation.',
    image: IMAGES.dimancheMatin,
  },
  {
    id: 'miel-pale',
    slug: 'miel-pale',
    name: 'Miel pâle',
    collection: 'Dimanche matin',
    collectionSlug: 'dimanche-matin',
    category: 'diffuseur',
    price: 42,
    format: 'Diffuseur à tiges — 100ml — 8 semaines',
    olfactiveFamily: 'Floral doux',
    notes: ['Miel d\'acacia', 'Rose pâle', 'Vanille légère'],
    ambiance: 'La douceur d\'un miel clair, d\'une rose simple, d\'une maison qui sent bon.',
    whenToLight: 'En continu dans une chambre, un couloir ou une salle de bain.',
    composition: 'Huile de diffusion végétale, fragrance sans phtalates, tiges en rotin.',
    usage: 'Retourner les tiges toutes les semaines pour intensifier le parfum.',
    image: IMAGES.dimancheMatin,
  },

  // Zeste & feu
  {
    id: 'orange-fumee',
    slug: 'orange-fumee',
    name: 'Orange fumée',
    collection: 'Zeste & feu',
    collectionSlug: 'zeste-feu',
    category: 'bougie',
    price: 32,
    format: 'Bougie en verre ambré — 220g — 50h',
    olfactiveFamily: 'Agrumes épicés',
    notes: ['Orange brûlée', 'Fumée douce', 'Cannelle'],
    ambiance: 'L\'énergie d\'une fin de journée, une orange séchée sur le feu, la chaleur qui monte.',
    whenToLight: 'En soirée, pour créer une atmosphère chaude et vivante.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Tailler la mèche à 5mm avant chaque utilisation.',
    image: IMAGES.zesteFeu,
    isBestSeller: true,
  },
  {
    id: 'epices-vives',
    slug: 'epices-vives',
    name: 'Épices vives',
    collection: 'Zeste & feu',
    collectionSlug: 'zeste-feu',
    category: 'encens',
    price: 18,
    format: 'Encens en bâtonnets — 20 pièces',
    olfactiveFamily: 'Épicé vif',
    notes: ['Poivre rose', 'Gingembre', 'Clou de girofle'],
    ambiance: 'Des épices ouvertes, vives, qui réveillent l\'espace et réchauffent l\'air.',
    whenToLight: 'En début de soirée, pour dynamiser une pièce avant un repas.',
    composition: 'Poudre de bois naturelle, huiles essentielles, sans charbon.',
    usage: 'Brûler dans un porte-encens adapté. Ne jamais laisser sans surveillance.',
    image: IMAGES.zesteFeu,
    isNew: true,
  },
  {
    id: 'ambre-zeste',
    slug: 'ambre-zeste',
    name: 'Ambre zesté',
    collection: 'Zeste & feu',
    collectionSlug: 'zeste-feu',
    category: 'bougie',
    price: 28,
    format: 'Bougie en verre ambré — 180g — 40h',
    olfactiveFamily: 'Oriental agrumé',
    notes: ['Ambre', 'Bergamote', 'Patchouli léger'],
    ambiance: 'La profondeur de l\'ambre adoucie par un zeste vif. Chaud et lumineux à la fois.',
    whenToLight: 'En soirée, pour une atmosphère à la fois chaleureuse et raffinée.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation.',
    image: IMAGES.zesteFeu,
  },
  {
    id: 'flamme-douce',
    slug: 'flamme-douce',
    name: 'Flamme douce',
    collection: 'Zeste & feu',
    collectionSlug: 'zeste-feu',
    category: 'coffret',
    price: 58,
    format: 'Coffret — 1 bougie + 1 encens + 1 allumette longue',
    olfactiveFamily: 'Épicé doux',
    notes: ['Bois de santal', 'Cardamome', 'Vanille'],
    ambiance: 'Un coffret pensé pour offrir ou se faire plaisir. Tout pour créer un rituel.',
    whenToLight: 'Pour marquer un moment, un cadeau, une occasion simple.',
    composition: 'Cire de soja naturelle, encens naturel, allumettes longues en bois.',
    usage: 'Contenu : 1 bougie Flamme douce 180g + 10 bâtonnets d\'encens + 5 allumettes longues.',
    image: IMAGES.zesteFeu,
    isBestSeller: true,
  },

  // Herbes chaudes
  {
    id: 'sauge-lente',
    slug: 'sauge-lente',
    name: 'Sauge lente',
    collection: 'Herbes chaudes',
    collectionSlug: 'herbes-chaudes',
    category: 'bougie',
    price: 28,
    format: 'Bougie en céramique mate — 180g — 40h',
    olfactiveFamily: 'Herbacé',
    notes: ['Sauge', 'Cèdre', 'Terre humide'],
    ambiance: 'La sauge dans ce qu\'elle a de plus calme. Un bois clair en fond, une terre douce.',
    whenToLight: 'En fin d\'après-midi, pour une transition douce vers la soirée.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation.',
    image: IMAGES.herbesChaudes,
    isBestSeller: true,
  },
  {
    id: 'tisane-verte',
    slug: 'tisane-verte',
    name: 'Tisane verte',
    collection: 'Herbes chaudes',
    collectionSlug: 'herbes-chaudes',
    category: 'diffuseur',
    price: 42,
    format: 'Diffuseur à tiges — 100ml — 8 semaines',
    olfactiveFamily: 'Herbacé frais',
    notes: ['Verveine', 'Menthe douce', 'Citron vert'],
    ambiance: 'La fraîcheur d\'une tisane préparée, d\'herbes coupées, d\'une cuisine qui sent le jardin.',
    whenToLight: 'En continu dans une cuisine, une salle de bain ou un espace de travail.',
    composition: 'Huile de diffusion végétale, fragrance sans phtalates, tiges en rotin.',
    usage: 'Retourner les tiges toutes les semaines pour intensifier le parfum.',
    image: IMAGES.herbesChaudes,
    isNew: true,
  },
  {
    id: 'feuille-tiede',
    slug: 'feuille-tiede',
    name: 'Feuille tiède',
    collection: 'Herbes chaudes',
    collectionSlug: 'herbes-chaudes',
    category: 'bougie',
    price: 28,
    format: 'Bougie en verre clair — 180g — 40h',
    olfactiveFamily: 'Végétal doux',
    notes: ['Figuier', 'Feuille verte', 'Musc blanc'],
    ambiance: 'La douceur d\'une feuille de figuier, d\'un jardin chaud, d\'un air végétal et calme.',
    whenToLight: 'En journée, pour une atmosphère fraîche et naturelle.',
    composition: 'Cire de soja naturelle, fragrance sans phtalates, mèche en coton.',
    usage: 'Laisser fondre le bain de cire complet lors de la première utilisation.',
    image: IMAGES.herbesChaudes,
  },
  {
    id: 'jardin-sec',
    slug: 'jardin-sec',
    name: 'Jardin sec',
    collection: 'Herbes chaudes',
    collectionSlug: 'herbes-chaudes',
    category: 'encens',
    price: 18,
    format: 'Encens en bâtonnets — 20 pièces',
    olfactiveFamily: 'Herbacé boisé',
    notes: ['Romarin', 'Thym', 'Bois de cèdre'],
    ambiance: 'Un jardin en été, les herbes séchées par le soleil, la chaleur de la pierre.',
    whenToLight: 'En méditation, en yoga, ou pour purifier l\'air d\'une pièce.',
    composition: 'Poudre de bois naturelle, huiles essentielles, sans charbon.',
    usage: 'Brûler dans un porte-encens adapté. Ne jamais laisser sans surveillance.',
    image: IMAGES.herbesChaudes,
  },
];

export const bestSellers = products.filter(p => p.isBestSeller);
export const newProducts = products.filter(p => p.isNew);
export const coffrets = products.filter(p => p.category === 'coffret');

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(p => p.collectionSlug === collectionSlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug);
}
