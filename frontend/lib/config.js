export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  THEME: "theme",
  LANGUAGE: "language",
  SETTINGS: "app_settings",
};

export const APP_CONFIG = {
  APP_NAME: "AuthApp",
  APP_VERSION: "1.0.0",
  DEFAULT_PAGE_SIZE: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024,
  SUPPORTED_FILE_TYPES: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  API_TIMEOUT: 30000,
  TOKEN_REFRESH_INTERVAL: 3600000,
};

export const COLORS = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  success: {
    light: "#d1fae5",
    main: "#10b981",
    dark: "#059669",
  },
  warning: {
    light: "#fef3c7",
    main: "#f59e0b",
    dark: "#d97706",
  },
  danger: {
    light: "#fee2e2",
    main: "#ef4444",
    dark: "#dc2626",
  },
};

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
};

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};