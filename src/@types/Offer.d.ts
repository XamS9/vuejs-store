interface Offer {
  id: number;
  uuid: string;
  product_id: number;
  description: string | null;
  user_id: number;
  price: string;
  status: number;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
}
