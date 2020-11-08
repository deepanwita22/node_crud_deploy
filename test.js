let mongoose = require("mongoose");
let Aliens = require('./models/alien');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./app');
let should = chai.should();


chai.use(chaiHttp);

describe('Aliens', () => {
    beforeEach((done) => {
        Aliens.remove({}, (err) => {
           done();
        });
    });
  describe('/GET Aliens', () => {
      it('it should GET all the Aliens', (done) => {
        chai.request(app)
            .get('/aliens')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  
   
  
  describe('/POST Alien', () => {
      it('it should not POST a book without pages field', (done) => {
          let alien = {
              name: "test",
              tech: "test",
              sub: true
          }
        chai.request(app)
            .post('/aliens')
            .send(alien)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  
              done();
            });
      });

  });
});