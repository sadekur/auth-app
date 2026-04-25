const handleResponse = (res, statusCode, message, data = null) => {
  const response = { message };
  if (data) {
    Object.assign(response, data);
  }
  return res.status(statusCode).json(response);
};

const successResponse = (res, message, data) => handleResponse(res, 200, message, data);
const createdResponse = (res, message, data) => handleResponse(res, 201, message, data);
const errorResponse = (res, statusCode, message) => handleResponse(res, statusCode, message);

module.exports = {
  handleResponse,
  successResponse,
  createdResponse,
  errorResponse,
};