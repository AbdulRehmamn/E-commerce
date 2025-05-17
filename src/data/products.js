/**
 * @type {import('../types').Product[]}
 */
export const products = [
  {
    id: 1,
    name: "Minimalist Crew Neck T-Shirt",
    price: 29.99,
    category: "t-shirts",
    images: [
      "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Black", "White", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Our signature crew neck t-shirt made from premium organic cotton. Featuring a minimalist design and perfect fit."
  },
  {
    id: 2,
    name: "Tailored Slim Fit Jeans",
    price: 89.99,
    category: "jeans",
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Dark Blue", "Black", "Light Wash"],
    sizes: ["30", "32", "34", "36"],
    description: "Expertly crafted slim fit jeans that offer both style and comfort. Made from premium denim with just the right amount of stretch."
  },
  {
    id: 3,
    name: "Essential Crewneck Sweater",
    price: 79.99,
    category: "sweaters",
    images: [
      "https://images.pexels.com/photos/6614195/pexels-photo-6614195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6614187/pexels-photo-6614187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Oatmeal", "Charcoal", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "Our essential sweater is knitted from soft merino wool, offering warmth without bulk. Perfect for layering or wearing on its own."
  },
  {
    id: 4,
    name: "Structured Blazer",
    price: 159.99,
    category: "outerwear",
    images: [
      "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Navy", "Black", "Camel"],
    sizes: ["S", "M", "L", "XL"],
    description: "A timeless blazer with a modern silhouette. Crafted from premium wool blend with a hint of stretch for comfort."
  },
  {
    id: 5,
    name: "Relaxed Fit Oxford Shirt",
    price: 69.99,
    category: "shirts",
    images: [
      "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["White", "Blue", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    description: "A versatile Oxford shirt with a relaxed fit. Made from premium cotton with a soft, lived-in feel."
  },
  {
    id: 6,
    name: "Classic Chino Pants",
    price: 79.99,
    category: "pants",
    images: [
      "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Khaki", "Navy", "Olive"],
    sizes: ["30", "32", "34", "36"],
    description: "Our signature chinos feature a tailored fit and classic style. Made from premium cotton twill with a touch of stretch."
  },
  {
    id: 7,
    name: "Oversized Hoodie",
    price: 89.99,
    category: "sweaters",
    images: [
      "https://images.pexels.com/photos/5324924/pexels-photo-5324924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5325544/pexels-photo-5325544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Black", "Grey", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    description: "A cozy oversized hoodie made from premium cotton fleece. Features a kangaroo pocket and adjustable hood."
  },
  {
    id: 8,
    name: "Lightweight Parka",
    price: 149.99,
    category: "outerwear",
    images: [
      "https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6629663/pexels-photo-6629663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    colors: ["Olive", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    description: "A lightweight, water-resistant parka perfect for transitional weather. Features multiple pockets and an adjustable hood."
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "t-shirts", name: "T-Shirts" },
  { id: "shirts", name: "Shirts" },
  { id: "sweaters", name: "Sweaters & Hoodies" },
  { id: "jeans", name: "Jeans" },
  { id: "pants", name: "Pants" },
  { id: "outerwear", name: "Outerwear" }
];

export const featuredCategories = [
  {
    id: "new-arrivals",
    name: "New Arrivals",
    image: "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "The latest additions to our collection"
  },
  {
    id: "bestsellers",
    name: "Bestsellers",
    image: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Our most popular styles"
  },
  {
    id: "essentials",
    name: "Essentials",
    image: "https://images.pexels.com/photos/6626963/pexels-photo-6626963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Timeless pieces for your wardrobe"
  }
];
