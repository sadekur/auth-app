const User = require("../models/User");

const checkPermissions = (resourceOwnerId, currentUserId) => {
  return resourceOwnerId.toString() === currentUserId.toString();
};

const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

const sanitizeUser = (user) => {
  if (!user) return null;
  const obj = user.toObject ? user.toObject() : user;
  delete obj.password;
  delete obj.__v;
  return obj;
};

module.exports = {
  checkPermissions,
  isValidObjectId,
  sanitizeUser,
};