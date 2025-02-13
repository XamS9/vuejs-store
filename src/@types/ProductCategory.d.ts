interface ProductCategory {
  id: number;
  uuid: string;
  name: string;
  description: string | null;
  avatar_path: string | null;
  columns: string;
  status: number;
  created_at: string;
  updated_at: string;
}
