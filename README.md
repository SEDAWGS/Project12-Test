Project12
=========

12

Data Model
-
- User
  - Name
  - Email
  - Unique ID
- Sublet Listing
  - Address
  - Price
  - Details
  - Unique ID
- Inbox
  - Owner
  - Conversations: [{ Unique ID, Other user }]
  - Unique ID
- Inbox Conversation
  - Messages: [{ Unique ID, Message body, Sender }]

API
-
#### /users
- GET /users
  - searches users
- POST /users
  - make a user
- GET /users/:user_id
  - gets a user by his ID
- PUT /users/:user_id
  - modify a user
- DELETE /users/:user_id
  - delete a user

#### /users/:id/inbox
- GET /users/:user_id/inbox
  - get a user's inbox
- GET /users/:user_id/inbox/:recipient_id
  - get a threaded conversation
- POST /users/:user_id/inbox/:recipient_id
  - send a message
- DELETE /users/:user_id/inbox/:recipient_id
  - delete a threaded conversation

#### /sublets
- GET /sublets
  - searches and returns sublet listings with filters
- POST /sublets
  - post a sublet listing
- GET /sublets/:sublet_id
  - gets a sublet listing by its ID
- PUT /sublets/:sublet_id
  - edit a sublet listing
- DELETE /sublets/:sublet_id
  - delete a sublet listing
