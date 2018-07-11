const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('http-status-codes');

chai.should();
chai.use(chaiHttp);

const API_BASE_URL = 'http://localhost:80';

describe('API tests:', () => {
  it('GET /api/endpoint', (done) => {
    chai.request(API_BASE_URL).get('/api/endpoint').end((err, res) => {
      console.log(JSON.stringify(res.body, null, 2));

      res.status.should.be.equal(200);

      done();
    });
  });
});
