module.exports = function(app) {

};

function isValidAPIKey(req, res, next) {
  // check API key in request
  return next();
};
