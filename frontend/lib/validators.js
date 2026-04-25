export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isStrongPassword = (password) => {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
};

export const isValidPhone = (phone) => {
  return /^[\d\s\-\(\)\+]+$/.test(phone) && phone.replace(/\D/g, "").length >= 10;
};

export const isUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
};

export const isAlphanumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

export const isNumeric = (str) => {
  return /^\d+$/.test(str);
};

export const isEmpty = (value) => {
  return value === null || value === undefined || value === "" || (Array.isArray(value) && value.length === 0);
};

export const hasMinLength = (str, min) => {
  return str && str.length >= min;
};

export const hasMaxLength = (str, max) => {
  return str && str.length <= max;
};

export const isInRange = (num, min, max) => {
  return num >= min && num <= max;
};

export const matchesPattern = (str, pattern) => {
  return pattern.test(str);
};