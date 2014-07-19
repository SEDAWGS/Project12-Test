module.exports = function(router, requestHandlers, db) {
  var userRequestHandlers = requestHandlers.users;
  var inboxRequestHandlers = userRequestHandlers.inboxRequestHandlers;
  var subletRequestHandlers = requestHandlers.sublets;

  router.route('/users')
  .get(userRequestHandlers.getUsers)    // search all users
  .post(userRequestHandlers.postUser);  // create a new user

  router.route('/users/:user_id')
  .get(userRequestHandlers.getUser)        // get a user
  .put(userRequestHandlers.putUser)        // modify a user
  .delete(userRequestHandlers.deleteUser); // delete a user

  router.route('/users/:user_id/inbox')
  .get(inboxRequestHandlers.getInbox);   // get a user's inbox

  router.route('/users/:user_id/inbox/:recipient_id')
  .get(inboxRequestHandlers.getConversation)    // get a conversation
  .post(inboxRequestHandlers.postMessage)       // send a message
  .delete(inboxRequestHandlers.deleteConversation);  // delete a conversation (um wat)

  router.route('/sublets')
  .get(subletRequestHandlers.getSublets)    // search all sublet listings
  .post(subletRequestHandlers.postSublet);  // post a sublet listing

  router.route('/sublets/:sublet_id')
  .get(subletRequestHandlers.getSublet)        // get a sublet listing
  .put(subletRequestHandlers.putSublet)        // modify a sublet listing
  .delete(subletRequestHandlers.deleteSublet); // delete a sublet listing
};
