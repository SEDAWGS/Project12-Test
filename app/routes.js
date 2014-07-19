module.exports = function(router, requestHandlers) {
  var userRequestHandlers = requestHandlers.users;
  var subletRequestHandlers = requestHandlers.sublets;

  router.route('/users')
  .get(userRequestHandlers.getUsers)
  .post(userRequestHandlers.postUser);

  router.route('/users/:user_id')
  .get(userRequestHandlers.getUser)
  .put(userRequestHandlers.putUser)
  .delete(userRequestHandlers.deleteUser);

  router.route('/sublets')
  .get(subletRequestHandlers.getSublets)
  .post(subletRequestHandlers.postSublet);

  router.route('/sublets/:sublet_id')
  .get(subletRequestHandlers.getSublet)
  .put(subletRequestHandlers.putSublet)
  .delete(subletRequestHandlers.deleteSublet);
};
