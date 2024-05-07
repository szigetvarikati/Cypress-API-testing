### Test Scenarios

#### Create Post
- Test method to create a new post.
- Uses the POST /post endpoint.
- Verifies that the post is created successfully and all details are correct.

#### Get All Posts
- Test method to retrieve the list of posts.
- Uses the GET /posts endpoint.
- Verifies that length of the list match the expected values.

#### Get a Post
- Test method to retrieve an existing booking.
- Uses the GET /posts/{id} endpoint.
- Verifies that the retrieved booking details match the expected values.

#### Update Post
- Test method to update an existing post.
- Uses the PUT /posts/{id} endpoint.
- Verifies that the post is updated successfully and all details are correct.

#### Partially Update Post
- Test method to partially update an existing post.
- Uses the PATCH /posts/{id} endpoint.
- Verifies that the post is partially updated successfully and all modified details are correct.

#### Delete Post
- Test method to delete an existing post.
- Uses the DELETE /posts/{id} endpoint.
- Verifies that the post is deleted successfully.

#### Check Post Deletion
- Test method to check if a post is deleted.
- Uses the GET /post/{id} endpoint.
- Verifies that the post returns a '404 Not Found' status code after deletion.

#### Test Delete Post When ID Does Not Exist
- Test method to verify the behavior when attempting to delete a post with a non-existing ID.
- Utilizes the DELETE /posts/{id} endpoint.
- Verifies that the server responds with a '405 Method Not Allowed' status code.

#### Test Post Details With Invalid ID
- Test method to verify the behavior when retrieving post details using an invalid ID.
- Utilizes the GET /post/{id} endpoint.
- Verifies that the server responds with a '404 Not Found' status code.