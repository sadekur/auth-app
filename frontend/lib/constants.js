export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const ENDPOINTS = {
  login: `${API_URL}/auth/login`,
  register: `${API_URL}/auth/register`,
  logout: `${API_URL}/auth/logout`,
  me: `${API_URL}/auth/me`,
  verify: `${API_URL}/auth/verify`,
  profile: `${API_URL}/users/profile`,
  password: `${API_URL}/users/password`,
};

export const TOKEN_KEY = "token";
export const USER_KEY = "user";

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  profile: "/profile",
  settings: "/settings",
};

export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: "Invalid email or password",
  USER_EXISTS: "User already exists",
  TOKEN_EXPIRED: "Session expired. Please login again",
  NETWORK_ERROR: "Network error. Please try again",
};

export const PASSWORD_MIN_LENGTH = 6;
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 50;