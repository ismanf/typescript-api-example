Feature: General

   Scenario Outline: POST, PUT requests should have non-empty payloads

   All POST, PUT requests must have non-zero values for its "Content-Length" header

    When the client makes a <method> request to /books
    And attaches a generic empty payload
    And sends the request
    Then our API should respond with a 400 HTTP status code
    And the payload of the response should be a JSON object
    And contains a message property which says "Payload should not be empty"

    Examples:
    | method |
    | POST   |
    | PUT    |