const { body, param, query } = require("express-validator");

const registerValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2, max: 50 }).withMessage("Name must be 2-50 characters"),
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address")
    .normalizeEmail(),
  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];

const loginValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email address")
    .normalizeEmail(),
  body("password")
    .notEmpty().withMessage("Password is required"),
];

const profileUpdateValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage("Name must be 2-50 characters"),
  body("email")
    .optional()
    .isEmail().withMessage("Invalid email address")
    .normalizeEmail(),
];

const passwordChangeValidation = [
  body("currentPassword")
    .notEmpty().withMessage("Current password is required"),
  body("newPassword")
    .isLength({ min: 6 }).withMessage("New password must be at least 6 characters"),
];

const validate = (req, res, next) => {
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({ 
      message: errors[0].msg,
      errors: errors.map(e => ({ field: e.param, message: e.msg }))
    });
  }
  next();
};

module.exports = {
  registerValidation,
  loginValidation,
  profileUpdateValidation,
  passwordChangeValidation,
  validate,
};