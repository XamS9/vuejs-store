interface User {
  id: number;
  uuid: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  email_verified_at: string | null;
  lat: number | null;
  lng: number | null;
  bulk_products: number;
  bulk_offer: number;
  avatar: string | null;
  rating: number;
  punctuation: number;
  role_id: number;
  status: number;
  code_password: string | null;
  date_code_password: string | null;
  created_at: string | null;
  updated_at: string | null;
}