import { expect } from 'chai';
import { Then, When } from 'cucumber';
import * as superagent from 'superagent';

When(/^the client makes a (PUT|POST) request to \/books/, function (method) {
  this.request = superagent(method, 'http://localhost:3000/api/books');
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

Then(/^our API should respond with a ([1-5]\d{2}) HTTP status code/, function (statusCode) {
  expect(this.response.statusCode).to.equal(Number(statusCode));
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