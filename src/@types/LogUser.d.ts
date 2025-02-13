interface LogUser {
  id: number;
  uuid: string;
  name: string;
  email: string;
  avatar: string | null;
  avatar_path: string | null;
  email_verified_at: string | null;
  role_id: number;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
  lat: number | null;
  lng: number | null;
  status: number;
  code_password: string | null;
  date_code_password: string | null;
}
