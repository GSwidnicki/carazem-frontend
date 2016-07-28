module.exports = function ($resource, BASE_URL) {
  return $resource(BASE_URL+"/rides", {}, {});
};