// utils/responseHandler.js
exports.sendResponse = (res, statusCode, message, data = null) => {
  res.status(statusCode).json({ message, data });
};