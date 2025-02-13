interface Product {
  id: number;
  uuid: string;
  name: string;
  resumen: string;
  description: string;
  sku: string;
  nmp: string;
  width: string;
  height: string;
  weight: string;
  lenght: string;
  depth: string;
  price: string;
  make_offer: number;
  user: User;
  brands: any[]; // Array of brands (define specific type if available)
  offers: Offer[];
  categories: any[]; // Array of categories (define specific type if available)
  colors: any[]; // Array of colors (define specific type if available)
  image: string | null;
  images: string[]; // Array of image URLs or paths
  stock: number;
  status: number;
  cart: number;
  favorite: number;
}