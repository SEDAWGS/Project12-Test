Project12
=========

12


Data Model
-
- User
- Name
- Email
- Inbox
- Sublets

API
- 
#### /users
- GET /users
  - searches users
- POST /users
  - make a user
- GET /users/:id
  - gets a user by his ID
- PUT /users/:id
  - modify a user

#### /users/:id/inbox
- GET /users/:id/inbox
  - get a user's inbox
- GET /users/:id/inbox/:recipient_id
  - get a threaded conversation
- POST /users/:id/inbox/:recipient_id
  - send a message
- DELETE /users/:id/inbox/:recipient_id
  - delete a threaded conversation

#### /sublets
- GET /sublets
  - searches and returns sublets with filters
- GET /sublets/:id
  - gets a sublet by its ID
- POST /sublets
  - post a sublet
