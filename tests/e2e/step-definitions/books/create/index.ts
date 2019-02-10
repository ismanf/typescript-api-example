import { expect } from 'chai';
import { Then, When } from 'cucumber';
import * as superagent from 'superagent';

When('the client creates a POST request to /books', function () {
  this.request = superagent('POST', 'http://localhost:3000/api/books');
});

When('attaches a generic empty payload', function () {
  return undefined;
});

When('sends the request', async function () {
  try {
    const response = await this.request;
    this.response = response.res;
  } catch (err) {
    this.response = err.response;
  }
});

Then('our API should respond with a 400 HTTP status code', function () {
  expect(this.response.statusCode).to.equal(400);
});

Then('the payload of the response should be a JSON object', function () {
  const headers = this.response.headers;
  const contentType: string = headers['Content-Type'] || headers['content-type'];
  expect(contentType).to.exist;
  expect(contentType).to.include('application/json');
});

Then('contains a message property which says "Payload should not be empty"', function () {
  const payload = { message: 'Payload should not be empty' };
  expect(this.response.text).to.equal(JSON.stringify(payload));
});