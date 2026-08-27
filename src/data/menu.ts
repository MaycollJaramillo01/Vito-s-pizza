export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  raw?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

export const menuCategoriesFull: MenuCategory[] = [
  {
    id: 'pizza',
    label: 'Pizza',
    note: 'Prices shown from the current online menu. Sizes and toppings available at checkout.',
    items: [
      {
        name: 'Plain Cheese Pizza',
        price: 'From $13.50',
        description: 'Classic cheese or create your own pizza.',
      },
      {
        name: 'Grandma Pizza',
        price: 'From $21.99',
        description: 'Square-cut, thick, saucy — a house specialty.',
      },
      {
        name: 'Meat Lovers Pizza',
        price: 'From $17.50',
        description: 'Pepperoni, sausage, ham, bacon, hamburger, cheese & sauce.',
      },
      {
        name: 'Buffalo Chicken Pizza',
        price: 'From $19.80',
        description: 'Spicy buffalo chicken, cheese & sauce.',
      },
      {
        name: 'Cheese Steak Pizza',
        price: 'From $16.50',
        description: 'Steak, fried onions, mozzarella, cheddar & sauce.',
      },
      {
        name: 'Cheesesteak Deluxe Pizza',
        price: 'From $18.50',
        description: 'Steak, fried onions, green peppers, mushrooms, cheddar, mozzarella & sauce.',
      },
      {
        name: 'Supreme Pizza',
        price: 'From $17.50',
        description:
          'Pepperoni, sausage, ham, bacon, red onions, mushrooms, black olives, green peppers, cheese & sauce.',
      },
      {
        name: 'Sicilian Pizza',
        price: 'From $18.00',
      },
      {
        name: 'White Pizza',
        price: 'From $15.60',
      },
      {
        name: 'Margherita',
        price: 'From $15.60',
      },
      {
        name: 'BBQ Chicken',
        price: 'From $19.80',
      },
      {
        name: 'Gluten Free Cauliflower Crust Pizza',
        price: 'From $15.00',
      },
    ],
  },
  {
    id: 'subs',
    label: 'Subs & Steaks',
    note: 'Hot subs served on homemade bread.',
    items: [
      {
        name: 'Cheesesteak Sub',
        price: 'From $14.00',
        description: 'Steak, fried onions, cheese & sauce.',
      },
      {
        name: 'Cheesesteak Deluxe Sub',
        price: 'From $14.00',
        description: 'Steak, fried onions, cheese, sauce, mushrooms, pepperoni & green peppers.',
      },
      {
        name: 'Chicken Cheesesteak Sub',
        price: 'From $14.00',
      },
      {
        name: 'Chicken Bacon Ranch Sub',
        price: 'From $14.00',
        description: 'Grilled chicken, cheese, bacon & ranch dressing.',
      },
      {
        name: 'Chicken Parmigiana Sub',
        price: 'From $14.00',
      },
      {
        name: 'Deluxe Italian Sub',
        price: 'From $15.59',
        description: 'Ham, cheese, salami, capicola, pepperoni & oil/vinegar.',
      },
      {
        name: 'Pepperoni & Cheese Sub',
        price: 'From $14.99',
      },
    ],
  },
  {
    id: 'wings',
    label: 'Wings',
    items: [
      {
        name: 'Traditional Wings',
        price: 'From $20.00',
        description: 'Served with bleu cheese or ranch dressing.',
      },
      {
        name: 'Boneless Wings',
        price: 'From $11.00',
        description: 'Served with bleu cheese or ranch dressing.',
      },
      {
        name: 'Lunch: 6 Wings or Boneless',
        price: '$9.99',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    items: [
      { name: 'Spaghetti with Meat Sauce', price: '$15.95' },
      { name: 'Spaghetti with Marinara Sauce', price: '$15.95' },
      { name: 'Chicken Alfredo', price: '$16.95' },
      { name: 'Chicken Parmesan', price: 'From $15.95' },
      { name: 'Cheese Ravioli', price: '$16.95', description: 'Ravioli stuffed with classic cheese.' },
      { name: 'Spinach Ravioli', price: '$15.95', description: 'In a pink sauce.' },
      { name: 'Veal Parmesan', price: '$18.95', description: 'With spaghetti.' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    items: [
      {
        name: 'House Salad',
        price: '$12.99',
        description: 'Tomatoes, onions, sweet peppers & mozzarella cheese.',
      },
      { name: 'Caesar Salad', price: '$13.99', description: 'Chopped romaine with croutons & shaved parmesan.' },
      { name: 'Greek Salad', price: '$13.99', description: 'Topped with kalamata olives & feta.' },
      { name: 'Grilled Chicken Salad', price: '$14.99', description: 'Topped with grilled chicken.' },
      { name: 'Cobb Salad', price: '$14.99', description: 'Romaine, tomatoes, bacon, turkey, blue cheese.' },
      { name: 'Pittsburgh Salad', price: '$14.99', description: 'Topped with steak & French fries.' },
    ],
  },
  {
    id: 'appetizers',
    label: 'Appetizers',
    items: [
      { name: 'Garlic Knots with Sauce', price: '$10.25' },
      {
        name: 'Mozzarella Sticks',
        price: '$9.75',
        description: 'Crispy outside, gooey inside. Served with marinara.',
      },
      { name: 'Loaded Fries', price: '$11.50', description: 'Bacon, cheddar, mozzarella, ranch.' },
      { name: 'Chicken Fingers', price: '$10.99', description: 'Breaded & fried chicken strips.' },
      { name: 'Chicken Fingers & Fries', price: '$16.79' },
      { name: 'Buffalo Chicken Egg Rolls', price: '$11.50' },
      { name: 'Cheesesteak Egg Rolls', price: '$13.20' },
    ],
  },
  {
    id: 'gluten-free',
    label: 'Gluten-Free',
    note: 'Cauliflower crust pizza and gluten-free subs. Tell us about allergies when you order.',
    items: [
      { name: 'Gluten Free Cauliflower Crust Pizza', price: 'From $15.00' },
      { name: 'Philly Cheesesteak Gluten Free Sub', price: 'See menu' },
      { name: 'Chicken Parmigiana Gluten Free Sub', price: 'See menu' },
      { name: 'Italian Gluten Free Sub', price: 'See menu' },
      { name: 'Don Vito’s Gluten Free Sub', price: 'See menu' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Cannoli',
        price: '$4.99',
        description: 'Fried dough tube filled with sweet, creamy ricotta.',
      },
      { name: 'Tiramisu', price: '$7.95' },
      { name: 'Cheesecake', price: '$5.50' },
      { name: 'Carrot Cake', price: '$6.50' },
    ],
  },
];
