interface User {
  jwt: string;
  user: LoggedUser;
}

interface LoggedUser {
  id: number;
  username: string;
  email: string;
  createdAt: string;
}

interface UserRegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  identifier: string;
  password: string;
}
