Feature: Create Book

   Client should be able to make a call to our API in order to Create a book.
   Our PAI should validate the structure of the payload and respond wiht an error
   if the payload is not valid.

   Scenario: Empty Payload

   If the client sends a POST request to /books with a unsupported payload, it
   should receive a response with 4xx status code.

   When the client creates a POST request to /books
   And attaches a generic empty payload
   And sends the request
   Then our API should respond with a 400 HTTP status code
   And the payload of the response should be a JSON object
   And contains a message property which says "Payload should not be empty"