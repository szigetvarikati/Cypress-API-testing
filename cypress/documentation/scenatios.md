### Test Scenarios

#### Create Booking
- Test method to create a new booking.
- Uses the POST /booking endpoint.
- Verifies that the booking is created successfully and all details are correct.

#### Get Booking
- Test method to retrieve an existing booking.
- Uses the GET /booking/{id} endpoint.
- Verifies that the retrieved booking details match the expected values.

#### Update Booking
- Test method to update an existing booking.
- Uses the PUT /booking/{id} endpoint.
- Verifies that the booking is updated successfully and all details are correct.

#### Partially Update Booking
- Test method to partially update an existing booking.
- Uses the PATCH /booking/{id} endpoint.
- Verifies that the booking is partially updated successfully and all modified details are correct.

#### Delete Booking
- Test method to delete an existing booking.
- Uses the DELETE /booking/{id} endpoint.
- Verifies that the booking is deleted successfully.

#### Check Booking Deletion
- Test method to check if a booking is deleted.
- Uses the GET /booking/{id} endpoint.
- Verifies that the booking returns a '404 Not Found' status code after deletion.

#### Test Delete Booking When ID Does Not Exist
- Test method to verify the behavior when attempting to delete a booking with a non-existing ID.
- Utilizes the DELETE /booking/{id} endpoint.
- Verifies that the server responds with a '405 Method Not Allowed' status code.

#### Test Booking Details With Invalid ID
- Test method to verify the behavior when retrieving booking details using an invalid ID.
- Utilizes the GET /booking/{id} endpoint.
- Verifies that the server responds with a '404 Not Found' status code.