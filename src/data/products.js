// Product data for Quffly website
export const superDeals = [
  {
    id: 1,
    name: 'Trendy Summer Dress',
    price: 29.99,
    originalPrice: 59.99,
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    category: 'Women',
    description: 'Perfect for summer outings, this trendy dress combines comfort with style.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Pink', 'White', 'Yellow']
  },
  {
    id: 2,
    name: 'Casual Denim Jacket',
    price: 39.99,
    originalPrice: 79.99,
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=400&fit=crop',
    rating: 4.3,
    reviews: 89,
    category: 'Women',
    description: 'Classic denim jacket that goes with everything in your wardrobe.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black']
  },
  {
    id: 3,
    name: 'Elegant Evening Gown',
    price: 89.99,
    originalPrice: 149.99,
    discount: '40% OFF',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b0c8b9b5b5?w=300&h=400&fit=crop',
    rating: 4.7,
    reviews: 156,
    category: 'Women',
    description: 'Stunning evening gown perfect for special occasions and formal events.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy', 'Emerald']
  },
  {
    id: 4,
    name: 'Comfortable Sneakers',
    price: 49.99,
    originalPrice: 89.99,
    discount: '44% OFF',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop',
    rating: 4.4,
    reviews: 203,
    category: 'Shoes',
    description: 'Ultra-comfortable sneakers perfect for daily wear and light exercise.',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Gray', 'Brown']
  }
];

export const recommendations = [
  {
    id: 5,
    name: 'Cozy Knit Sweater',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop',
    rating: 4.2,
    reviews: 67,
    category: 'Women',
    description: 'Soft and cozy knit sweater perfect for chilly days.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Gray', 'Pink', 'Brown']
  },
  {
    id: 6,
    name: 'Classic White Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
    rating: 4.6,
    reviews: 142,
    category: 'Women',
    description: 'Timeless white shirt that works for both casual and professional settings.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Off-White']
  },
  {
    id: 7,
    name: 'Stylish Handbag',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop',
    rating: 4.1,
    reviews: 78,
    category: 'Accessories',
    description: 'Elegant handbag with multiple compartments for organization.',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Navy', 'Tan']
  },
  {
    id: 8,
    name: 'Designer Sunglasses',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop',
    rating: 4.5,
    reviews: 91,
    category: 'Accessories',
    description: 'Premium sunglasses with UV protection and stylish design.',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Gold']
  }
];

export const categories = [
  { name: 'New In', slug: 'new-in' },
  { name: 'Women', slug: 'women' },
  { name: 'Men', slug: 'men' },
  { name: 'Kids', slug: 'kids' },
  { name: 'Shoes', slug: 'shoes' },
  { name: 'Accessories', slug: 'accessories' },
  { name: 'Home', slug: 'home' },
  { name: 'Sale', slug: 'sale' }
];

export const getAllProducts = () => {
  return [...superDeals, ...recommendations];
};

export const getProductsByCategory = (category) => {
  const allProducts = getAllProducts();
  return allProducts.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductById = (id) => {
  const allProducts = getAllProducts();
  return allProducts.find(product => product.id === parseInt(id));
};

