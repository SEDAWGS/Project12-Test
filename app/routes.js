module.exports = function(router, requestHandlers) {
  var userRequestHandlers = requestHandlers.users;
  var inboxRequestHandlers = userRequestHandlers.inboxRequestHandlers;
  var subletRequestHandlers = requestHandlers.sublets;

  router.route('/users')
  .get(userRequestHandlers.getUsers)
  .post(userRequestHandlers.postUser);

  router.route('/users/:user_id')
  .get(userRequestHandlers.getUser)
  .put(userRequestHandlers.putUser)
  .delete(userRequestHandlers.deleteUser);

  router.route('/users/:user_id/inbox')
  .get(inboxRequestHandlers.getInbox);

  router.route('/users/:user_id/inbox/:recipient_id')
  .get(inboxRequestHandlers.getConversation)
  .post(inboxRequestHandlers.postMessage)
  .delete(inboxRequestHandlers.deleteConversation);

  router.route('/sublets')
  .get(subletRequestHandlers.getSublets)
  .post(subletRequestHandlers.postSublet);

  router.route('/sublets/:sublet_id')
  .get(subletRequestHandlers.getSublet)
  .put(subletRequestHandlers.putSublet)
  .delete(subletRequestHandlers.deleteSublet);
};
