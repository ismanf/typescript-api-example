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
  if (this.response.statusCode !== 400) {
    throw new Error();
  }
});

Then('the payload of the response should be a JSON object', function () {
  const headers = this.response.headers;
  const contentType: string = headers['Content-Type'] || headers['content-type'];
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error();
  }

  try {
    this.responsePayload = JSON.parse(this.response.text);
  } catch (e) {
    throw new Error('Response not a valid JSON object');
  }
});

Then('contains a message property which says "Payload should not be empty"', function () {
  if(this.responsePayload.message !== 'Payload should not be empty') {
    throw new Error();
  }
});