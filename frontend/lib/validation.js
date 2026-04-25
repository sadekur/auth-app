export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  if (password.length < 6) return "Password must be at least 6 characters";
  if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter";
  if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter";
  if (!/[0-9]/.test(password)) return "Password must contain a number";
  return null;
};

export const validatePhone = (phone) => {
  const re = /^[\d\s\-\(\)\+]+$/;
  return re.test(phone) && phone.replace(/\D/g, "").length >= 10;
};

export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateRequired = (value) => {
  if (value === null || value === undefined || value === "") {
    return "This field is required";
  }
  if (Array.isArray(value) && value.length === 0) {
    return "This field is required";
  }
  return null;
};

export const validateMinLength = (value, min) => {
  if (!value || value.length < min) {
    return `Must be at least ${min} characters`;
  }
  return null;
};

export const validateMaxLength = (value, max) => {
  if (value && value.length > max) {
    return `Must be no more than ${max} characters`;
  }
  return null;
};

export const validateRange = (value, min, max) => {
  const num = parseFloat(value);
  if (isNaN(num) || num < min || num > max) {
    return `Must be between ${min} and ${max}`;
  }
  return null;
};

export const validateMatch = (value, otherValue, fieldName = "field") => {
  if (value !== otherValue) {
    return `Must match ${fieldName}`;
  }
  return null;
};

export const validateDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  return null;
};

export const validateFutureDate = (dateString) => {
  const date = new Date(dateString);
  if (date <= new Date()) {
    return "Date must be in the future";
  }
  return null;
};

export const validatePastDate = (dateString) => {
  const date = new Date(dateString);
  if (date >= new Date()) {
    return "Date must be in the past";
  }
  return null;
};

export const validateFileSize = (file, maxSizeMB) => {
  if (file.size > maxSizeMB * 1024 * 1024) {
    return `File size must be less than ${maxSizeMB}MB`;
  }
  return null;
};

export const validateFileType = (file, allowedTypes) => {
  if (!allowedTypes.includes(file.type)) {
    return `File type must be one of: ${allowedTypes.join(", ")}`;
  }
  return null;
};

export const validateJSON = (string) => {
  try {
    JSON.parse(string);
    return null;
  } catch {
    return "Invalid JSON format";
  }
};