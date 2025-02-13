interface LastLog {
    id: number;
    uuid: string;
    name: string;
    description: string;
    user: LogUser;
    status: number;
    created_at: string; // ISO 8601 date string
    updated_at: string; // ISO 8601 date string
  }
  