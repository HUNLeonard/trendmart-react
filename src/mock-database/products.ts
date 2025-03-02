// Men's Products
const menProducts = [
  {
    id: "men-001",
    name: "Classic Oxford Shirt",
    price: 39.99,
    category: "men",
    description:
      "A timeless cotton oxford shirt with button-down collar. Perfect for casual and semi-formal occasions.",
    src: "https://placehold.co/600x400/E0F2F1/1F2937?font=open-sans&text=Classic%20Oxford%20Shirt",
    rate: 4.5,
    reviewCount: 120,
  },
  {
    id: "men-002",
    name: "Slim Fit Jeans",
    price: 49.99,
    originalPrice: 59.99,
    category: "men",
    description:
      "Modern slim fit jeans with slight stretch for comfort. Features a classic five-pocket design.",
    src: "https://placehold.co/600x400/4A5568/FFFFFF?font=open-sans&text=Slim%20Fit%20Jeans",
    rate: 4.0,
    reviewCount: 250,
  },
  {
    id: "men-003",
    name: "Premium Cotton T-Shirt",
    price: 24.99,
    category: "men",
    description:
      "Soft premium cotton t-shirt with a crew neck. Comfortable for everyday wear.",
    src: "https://placehold.co/600x400/F5F5DC/1F2937?font=open-sans&text=Premium%20Cotton%20T-Shirt",
    rate: 4.8,
    reviewCount: 500,
  },
  {
    id: "men-004",
    name: "Casual Chino Pants",
    price: 44.99,
    originalPrice: 54.99,
    category: "men",
    description:
      "Versatile chino pants made from premium cotton twill. Features a comfortable straight fit.",
    src: "https://placehold.co/600x400/D4C4A8/1F2937?font=open-sans&text=Casual%20Chino%20Pants",
    rate: 4.3,
    reviewCount: 80,
  },
  {
    id: "men-005",
    name: "Lightweight Bomber Jacket",
    price: 79.99,
    category: "men",
    description:
      "Stylish bomber jacket with ribbed cuffs and hem. Perfect for transitional weather.",
    src: "https://placehold.co/600x400/2D3748/FFFFFF?font=open-sans&text=Lightweight%20Bomber%20Jacket",
    rate: 4.7,
    reviewCount: 180,
  },
  {
    id: "men-006",
    name: "Casual Polo Shirt",
    price: 34.99,
    category: "men",
    description:
      "Classic polo shirt made from breathable piqué cotton. Features a ribbed collar and cuffs.",
    src: "https://placehold.co/600x400/81C784/1F2937?font=open-sans&text=Casual%20Polo%20Shirt",
    rate: 4.4,
    reviewCount: 200,
  },
  {
    id: "men-007",
    name: "Knit Sweater",
    price: 54.99,
    category: "men",
    description:
      "Soft knit sweater with crew neck. Perfect for layering during colder months.",
    src: "https://placehold.co/600x400/A1887F/FFFFFF?font=open-sans&text=Knit%20Sweater",
    rate: 4.6,
    reviewCount: 150,
  },
  {
    id: "men-008",
    name: "Cargo Shorts",
    price: 39.99,
    originalPrice: 49.99,
    category: "men",
    description:
      "Durable cargo shorts with multiple pockets. Great for casual summer days.",
    src: "https://placehold.co/600x400/8D6E63/FFFFFF?font=open-sans&text=Cargo%20Shorts",
    rate: 4.2,
    reviewCount: 90,
  },
  {
    id: "men-009",
    name: "Denim Jacket",
    price: 69.99,
    category: "men",
    description:
      "Classic denim jacket with button closure. A versatile layering piece for any season.",
    src: "https://placehold.co/600x400/1E88E5/FFFFFF?font=open-sans&text=Denim%20Jacket",
    rate: 4.5,
    reviewCount: 300,
  },
  {
    id: "men-010",
    name: "Formal Dress Shirt",
    price: 49.99,
    originalPrice: 59.99,
    category: "men",
    description:
      "Crisp formal shirt made from premium cotton. Features a spread collar and convertible cuffs.",
    src: "https://placehold.co/600x400/ECEFF1/1F2937?font=open-sans&text=Formal%20Dress%20Shirt",
    rate: 4.1,
    reviewCount: 75,
  },
  {
    id: "men-011",
    name: "Hooded Sweatshirt",
    price: 44.99,
    originalPrice: 54.99,
    category: "men",
    description:
      "Comfortable hooded sweatshirt with kangaroo pocket. Made from soft cotton blend.",
    src: "https://placehold.co/600x400/607D8B/FFFFFF?font=open-sans&text=Hooded%20Sweatshirt",
    rate: 4.7,
    reviewCount: 400,
  },
  {
    id: "men-012",
    name: "Slim Fit Blazer",
    price: 89.99,
    category: "men",
    description:
      "Modern slim fit blazer with notch lapels. Perfect for business casual and formal settings.",
    src: "https://placehold.co/600x400/37474F/FFFFFF?font=open-sans&text=Slim%20Fit%20Blazer",
    rate: 4.3,
    reviewCount: 60,
  },
];

// Woman's Products
const womanProducts = [
  {
    id: "woman-001",
    name: "Floral Print Dress",
    price: 59.99,
    category: "woman",
    description:
      "Elegant floral print dress with a flattering A-line silhouette. Perfect for spring and summer.",
    src: "https://placehold.co/600x400/FFCDD2/1F2937?font=open-sans&text=Floral%20Print%20Dress",
    rate: 4.8,
    reviewCount: 450,
  },
  {
    id: "woman-002",
    name: "High-Waisted Jeans",
    price: 54.99,
    category: "woman",
    description:
      "Classic high-waisted jeans with a slim fit. Features a five-pocket design and slight stretch for comfort.",
    src: "https://placehold.co/600x400/7986CB/FFFFFF?font=open-sans&text=High-Waisted%20Jeans",
    rate: 4.5,
    reviewCount: 320,
  },
  {
    id: "woman-003",
    name: "Oversized Knit Sweater",
    price: 49.99,
    originalPrice: 59.99,
    category: "woman",
    description:
      "Cozy oversized sweater made from a soft knit blend. Features a relaxed fit and ribbed cuffs.",
    src: "https://placehold.co/600x400/B39DDB/1F2937?font=open-sans&text=Oversized%20Knit%20Sweater",
    rate: 4.6,
    reviewCount: 280,
  },
  {
    id: "woman-004",
    name: "Pleated Midi Skirt",
    price: 44.99,
    category: "woman",
    description:
      "Elegant pleated midi skirt with an elastic waistband. Versatile for both casual and formal occasions.",
    src: "https://placehold.co/600x400/F8BBD0/1F2937?font=open-sans&text=Pleated%20Midi%20Skirt",
    rate: 4.4,
    reviewCount: 150,
  },
  {
    id: "woman-005",
    name: "Tailored Blazer",
    price: 79.99,
    category: "woman",
    description:
      "Sophisticated tailored blazer with a single-button closure. Perfect for professional settings.",
    src: "https://placehold.co/600x400/546E7A/FFFFFF?font=open-sans&text=Tailored%20Blazer",
    rate: 4.7,
    reviewCount: 200,
  },
  {
    id: "woman-006",
    name: "Cotton Blouse",
    price: 39.99,
    originalPrice: 49.99,
    category: "woman",
    description:
      "Lightweight cotton blouse with a relaxed fit. Features a button-down front and collared neckline.",
    src: "https://placehold.co/600x400/E1F5FE/1F2937?font=open-sans&text=Cotton%20Blouse",
    rate: 4.3,
    reviewCount: 180,
  },
  {
    id: "woman-007",
    name: "Wrap Dress",
    price: 64.99,
    category: "woman",
    description:
      "Flattering wrap dress with a tie waist. Made from a comfortable, flowy fabric.",
    src: "https://placehold.co/600x400/CE93D8/1F2937?font=open-sans&text=Wrap%20Dress",
    rate: 4.9,
    reviewCount: 600,
  },
  {
    id: "woman-008",
    name: "Cropped Wide-Leg Pants",
    price: 49.99,
    category: "woman",
    description:
      "Trendy wide-leg pants with a cropped length. Features a high waist and side pockets.",
    src: "https://placehold.co/600x400/90A4AE/FFFFFF?font=open-sans&text=Cropped%20Wide-Leg%20Pants",
    rate: 4.2,
    reviewCount: 120,
  },
  {
    id: "woman-009",
    name: "Quilted Jacket",
    price: 84.99,
    originalPrice: 94.99,
    category: "woman",
    description:
      "Lightweight quilted jacket with a zip closure. Perfect for transitional weather.",
    src: "https://placehold.co/600x400/78909C/FFFFFF?font=open-sans&text=Quilted%20Jacket",
    rate: 4.6,
    reviewCount: 250,
  },
];

// Accessories Products
const accessoriesProducts = [
  {
    id: "acc-001",
    name: "Leather Belt",
    price: 29.99,
    category: "accessories",
    description:
      "Classic leather belt with a metal buckle. A versatile addition to any wardrobe.",
    src: "https://placehold.co/600x400/795548/FFFFFF?font=open-sans&text=Leather%20Belt",
    rate: 4.5,
    reviewCount: 200,
  },
  {
    id: "acc-002",
    name: "Canvas Backpack",
    price: 59.99,
    originalPrice: 69.99,
    category: "accessories",
    description:
      "Durable canvas backpack with multiple compartments. Perfect for daily use and short trips.",
    src: "https://placehold.co/600x400/5D4037/FFFFFF?font=open-sans&text=Canvas%20Backpack",
    rate: 4.7,
    reviewCount: 450,
  },
  {
    id: "acc-003",
    name: "Wool Scarf",
    price: 24.99,
    category: "accessories",
    description:
      "Soft wool blend scarf to keep you warm during colder months. Features a classic pattern.",
    src: "https://placehold.co/600x400/EF9A9A/1F2937?font=open-sans&text=Wool%20Scarf",
    rate: 4.4,
    reviewCount: 180,
  },
  {
    id: "acc-004",
    name: "Leather Wallet",
    price: 34.99,
    category: "accessories",
    description:
      "Sleek leather wallet with multiple card slots and a bill compartment. Features a minimalist design.",
    src: "https://placehold.co/600x400/8D6E63/FFFFFF?font=open-sans&text=Leather%20Wallet",
    rate: 4.6,
    reviewCount: 300,
  },
  {
    id: "acc-005",
    name: "Aviator Sunglasses",
    price: 79.99,
    originalPrice: 89.99,
    category: "accessories",
    description:
      "Classic aviator sunglasses with UV protection. Features metal frames and gradient lenses.",
    src: "https://placehold.co/600x400/212121/FFFFFF?font=open-sans&text=Aviator%20Sunglasses",
    rate: 4.8,
    reviewCount: 500,
  },
  {
    id: "acc-006",
    name: "Leather Crossbody Bag",
    price: 64.99,
    originalPrice: 74.99,
    category: "accessories",
    description:
      "Compact leather crossbody bag with adjustable strap. Perfect for everyday essentials.",
    src: "https://placehold.co/600x400/6D4C41/FFFFFF?font=open-sans&text=Leather%20Crossbody%20Bag",
    rate: 4.5,
    reviewCount: 220,
  },
  {
    id: "acc-007",
    name: "Knit Beanie",
    price: 19.99,
    originalPrice: 29.99,
    category: "accessories",
    description:
      "Warm knit beanie with a folded brim. Made from a soft acrylic blend for comfort.",
    src: "https://placehold.co/600x400/9C27B0/FFFFFF?font=open-sans&text=Knit%20Beanie",
    rate: 4.3,
    reviewCount: 150,
  },
  {
    id: "acc-008",
    name: "Leather Gloves",
    price: 44.99,
    category: "accessories",
    description:
      "Elegant leather gloves lined with soft fleece. Perfect for cold weather.",
    src: "https://placehold.co/600x400/4E342E/FFFFFF?font=open-sans&text=Leather%20Gloves",
    rate: 4.7,
    reviewCount: 100,
  },
  {
    id: "acc-009",
    name: "Silk Neck Tie",
    price: 29.99,
    originalPrice: 39.99,
    category: "accessories",
    description:
      "Premium silk tie with a subtle pattern. Perfect for formal occasions.",
    src: "https://placehold.co/600x400/3F51B5/FFFFFF?font=open-sans&text=Silk%20Neck%20Tie",
    rate: 4.0,
    reviewCount: 80,
  },
  {
    id: "acc-010",
    name: "Canvas Tote Bag",
    price: 39.99,
    category: "accessories",
    description:
      "Spacious canvas tote with reinforced handles. Perfect for shopping and beach trips.",
    src: "https://placehold.co/600x400/BDBDBD/1F2937?font=open-sans&text=Canvas%20Tote%20Bag",
    rate: 4.2,
    reviewCount: 300,
  },
  {
    id: "acc-011",
    name: "Leather Watch",
    price: 89.99,
    originalPrice: 99.99,
    category: "accessories",
    description:
      "Classic watch with a leather strap and minimalist dial. Features quartz movement.",
    src: "https://placehold.co/600x400/3E2723/FFFFFF?font=open-sans&text=Leather%20Watch",
    rate: 4.9,
    reviewCount: 600,
  },
  {
    id: "acc-012",
    name: "Woven Straw Hat",
    price: 34.99,
    category: "accessories",
    description:
      "Stylish straw hat with a wide brim. Perfect for sun protection during warmer months.",
    src: "https://placehold.co/600x400/FFF9C4/1F2937?font=open-sans&text=Woven%20Straw%20Hat",
    rate: 4.6,
    reviewCount: 250,
  },
];

// Combined products array
const allProducts = [...menProducts, ...womanProducts, ...accessoriesProducts];

export { menProducts, womanProducts, accessoriesProducts, allProducts };
