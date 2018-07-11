const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http-status-codes');

chai.should();
chai.use(chaiHttp);

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('API tests:', () => {
  it('GET /posts/1', (done) => {
    chai.request(API_BASE_URL).get('/posts/1').end((err, res) => {
      console.log(JSON.stringify(res.body, null, 2));

      res.status.should.be.equal(200);

      done();
    });
  });

  it('PUT /posts/1', (done) => {
    chai.request(API_BASE_URL).get('/posts/1')
    .send({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .end((err, res) => {
      console.log(JSON.stringify(res.body, null, 2));

      res.status.should.be.equal(200);

      done();
    });
  });
});
