export const site = {
  name: "Vito's Pizza",
  tagline: 'Pizza, pastas, subs & salads',
  url: 'https://vitospizzaofmechanicsburg.com',
  phone: '(717) 790-1970',
  email: '',
  address: '265 Cumberland Pkwy',
  addressLine2: 'Mechanicsburg, PA 17055',
  mapsUrl: 'https://maps.google.com/?q=265+Cumberland+Pkwy+Mechanicsburg+PA+17055',
  description:
    'Order pizza, subs, wings, pasta and Italian favorites from Vito’s Pizza in Mechanicsburg, PA. Pickup and delivery — view the menu and order online.',
  social: {
    facebook: '',
    instagram: '',
  },
  logo: '/media/logo.png',
  logoDark: '/media/logo-dark.png',
  favicon: '/media/favicon.png',
  ogImage: '/media/og.jpg',
  heroImage: '/media/hero.jpg',
  ctaBg: '/media/cta-bg.jpg',
  hiringBg: '/media/catering.jpg',
  storyImage: '/media/story.jpg',
  orderUrl: 'https://slicelife.com/restaurants/pa/mechanicsburg/17055/vito-s-pizza-mechanicsburg/menu',
  recaptchaSiteKey: '',
};

export const hours = [
  { day: 'Monday', value: 'Closed' },
  { day: 'Tuesday', value: '10:00 AM – 9:30 PM' },
  { day: 'Wednesday', value: '10:00 AM – 9:30 PM' },
  { day: 'Thursday', value: '10:00 AM – 9:30 PM' },
  { day: 'Friday', value: '10:00 AM – 10:00 PM' },
  { day: 'Saturday', value: '10:00 AM – 10:00 PM' },
  { day: 'Sunday', value: '11:00 AM – 9:00 PM' },
];

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/menu/', label: 'Menu' },
  { href: '/catering/', label: 'Catering' },
  { href: '/about-us/', label: 'About' },
  { href: '/contact-us/', label: 'Contact' },
];

export const dishes = [
  {
    name: 'Grandma Pizza',
    price: 'From $21.99',
    image: '/media/dishes/grandma.jpg',
    description: 'Thick square-cut Sicilian-style pie — a Mechanicsburg favorite worth ordering first.',
  },
  {
    name: 'Meat Lovers Pizza',
    price: 'From $17.50',
    image: '/media/dishes/meat-lovers.jpg',
    description: 'Pepperoni, sausage, ham, bacon, hamburger, cheese & sauce.',
  },
  {
    name: 'Buffalo Chicken Pizza',
    price: 'From $19.80',
    image: '/media/dishes/buffalo.jpg',
    description: 'Spicy buffalo chicken on a cheesy pie — heat, crunch, and a reason to reorder.',
  },
  {
    name: 'Plain Cheese Pizza',
    price: 'From $13.50',
    image: '/media/dishes/cheese.jpg',
    description: 'Classic cheese, or build your own. The starting point for every regular.',
  },
  {
    name: 'Cheesesteak Sub',
    price: 'From $14.00',
    image: '/media/dishes/cheesesteak.jpg',
    description: 'Steak, fried onions, cheese & sauce — served on homemade bread.',
  },
  {
    name: 'Traditional Wings',
    price: 'From $20.00',
    image: '/media/dishes/wings.jpg',
    description: 'Served with bleu cheese or ranch. Boneless also available.',
  },
];

export const gallery = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1;
  return {
    full: `/media/gallery/${n}.jpg`,
    thumb: `/media/gallery/${n}-thumb.jpg`,
  };
});

export const faqs = [
  {
    q: 'Where is Vito’s Pizza?',
    a: 'Vito’s Pizza is at 265 Cumberland Pkwy, Mechanicsburg, PA 17055. Pickup is at the shop; delivery is available through online ordering.',
  },
  {
    q: 'Do you offer pickup and delivery?',
    a: 'Yes. Order online for pickup or delivery, or call (717) 790-1970. Pickup is usually the fastest way to get a hot pie.',
  },
  {
    q: 'What kind of food do you serve?',
    a: 'Pizza (including Grandma and specialty pies), cheesesteaks, hot and cold subs, wings, pasta dinners, salads, wraps, desserts, and a kids menu.',
  },
  {
    q: 'Do you have gluten-free options?',
    a: 'Yes. Gluten-free cauliflower crust pizza and gluten-free cheesesteak, hot, and cold subs are on the menu. Ask us about preparation if you have a serious allergy.',
  },
  {
    q: 'Do you cater groups and events?',
    a: 'Yes. Catering salads, subs, wraps, and pasta trays are available for offices, teams, parties, and family gatherings. Call us or use the catering page to start an order.',
  },
  {
    q: 'Are you open on Sunday? Monday?',
    a: 'Sunday 11:00 AM – 9:00 PM. Closed Mondays. Tuesday–Thursday 10:00 AM – 9:30 PM; Friday–Saturday 10:00 AM – 10:00 PM. Hours can vary on holidays — call to confirm.',
  },
  {
    q: 'Can I order online?',
    a: 'Yes. Use Order Online for pickup or delivery. You can also call (717) 790-1970.',
  },
];

export const menuCategories = [
  { label: 'Pizza', href: '/menu/?cat=pizza' },
  { label: 'Subs & Steaks', href: '/menu/?cat=subs' },
  { label: 'Wings', href: '/menu/?cat=wings' },
  { label: 'Pasta', href: '/menu/?cat=pasta' },
  { label: 'Salads', href: '/menu/?cat=salads' },
  { label: 'Appetizers', href: '/menu/?cat=appetizers' },
  { label: 'Gluten-Free', href: '/menu/?cat=gluten-free' },
  { label: 'Catering', href: '/catering/' },
];

export const chefBio = {
  name: "Vito's Pizza",
  title: 'Mechanicsburg’s neighborhood pie shop',
  image: '/media/story.jpg',
  paragraphs: [
    'Vito’s Pizza is the local shop at 265 Cumberland Pkwy — pizza, subs, cheesesteaks, wings, pasta, and Italian favorites for pickup and delivery.',
    'Hot subs are served on homemade bread. The menu runs deep: Grandma pizza, Meat Lovers, Buffalo Chicken, gluten-free cauliflower crust, and catering trays for the office or the team.',
    'This isn’t a generic order page. It’s the shop in Mechanicsburg — the one neighbors already know, with a site that finally shows it.',
  ],
};

export const aboutCopy = {
  paragraphs: [
    'Vito’s Pizza is a Mechanicsburg pizza shop at 265 Cumberland Pkwy. People come for a reliable pie, a cheesesteak on homemade bread, and a menu that covers the whole table — not just one specialty.',
    'Pickup and delivery keep weeknights easy. Catering trays cover the office lunch, the rec-league party, and the family gathering without making anyone invent a second restaurant.',
    'The food was already here. The website just needed to look like Vito’s — not like a generic ordering widget.',
  ],
  pillars: [
    'Pizza, subs, wings, pasta, and Italian favorites',
    'Pickup at the shop and delivery in Mechanicsburg',
    'Hot subs on homemade bread',
    'Gluten-free crust and gluten-free subs',
    'Catering trays for groups and events',
  ],
};

export const team: { name: string; alias: string; role: string; image: string }[] = [];

export const positions = ['Cooks', 'Drivers', 'Counter / Cashiers', 'Prep', 'Other'];

export const socialProof = {
  label: 'Loved by Mechanicsburg · 4.8 on Slice',
  years: { value: '4.8', label: 'Slice guest rating' },
};

export const orderCta = {
  title: 'Hungry now? Order pickup or delivery.',
  body: 'Skip the hold music. Order online for pickup or delivery — or call the shop.',
  cta: 'Order Online',
  get href() {
    return site.orderUrl;
  },
};

export const reviews = {
  eyebrow: 'What guests say',
  title: 'Loved by Mechanicsburg.',
  items: [
    {
      quote: 'Go-to pizza night. Pie comes out hot, cheese is right, and pickup is easy.',
      name: 'Slice guest',
      role: 'Mechanicsburg',
    },
    {
      quote: 'Cheesesteak on the homemade bread is the move. Filling, fast, and consistent.',
      name: 'Slice guest',
      role: 'Pickup regular',
    },
    {
      quote: 'Grandma pizza is why we keep coming back. Thick, saucy, feeds the table.',
      name: 'Slice guest',
      role: 'Family order',
    },
    {
      quote: 'Wings and a large cheese after the game — never a wrong call.',
      name: 'Slice guest',
      role: 'Delivery',
    },
    {
      quote: 'Catered an office lunch. Trays showed up on time and nobody left hungry.',
      name: 'Slice guest',
      role: 'Catering',
    },
  ],
};

export const whyChoose = {
  eyebrow: 'Why Vito’s',
  title: 'A real neighborhood shop — not a generic order screen.',
  body: 'Pizza, subs, and Italian favorites from 265 Cumberland Pkwy. Pickup, delivery, and catering for Mechanicsburg.',
  points: [
    'Grandma, Meat Lovers & specialty pies',
    'Cheesesteaks on homemade bread',
    'Pickup & delivery',
    'Gluten-free crust & subs',
    'Catering trays for groups',
  ],
  stats: [
    { value: '4.8', label: 'Rating on Slice' },
    { value: '1,000+', label: 'Guest ratings' },
  ],
};

export const cateringUseCases = [
  'Office lunches',
  'Birthday parties',
  'Corporate events',
  'School events',
  'Family gatherings',
  'Sports teams',
];
