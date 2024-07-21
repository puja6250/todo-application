import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'; 

chai.use(chaiHttp);
const { expect } = chai;

describe('Task API', function () {
  it('should add the data', function (done) {
    chai.request(app)
      .post('/api/create') 
      .end((err, response) => {
        if (err) {
          done(err);
        } else {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.be.an('array');
          response.body.forEach(item => {
            expect(item).to.have.all.keys('title', 'description', 'status');
          });
          done();
        }
      });
  });
});

describe('Task API', function () {
  it('should get all data', function (done) {
    chai.request(app)
      .get('/api/getall') 
      .end((err, response) => {
        if (err) {
          done(err);
        } else {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.be.an('array');
          response.body.forEach(user => {
            expect(user).to.have.all.keys('title', 'description', 'status'); 
          });
          done();
        }
      });
  });
});

describe('Task API', function () {
  it('should get a user by ID', function (done) {
    const userId = '669c098343c4ce8c66427c6a'; 

    chai.request(app)
      .get(`/api/getone/${userId}`) 
      .end((err, response) => {
        if (err) {
          done(err);
        } else {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.be.an('object');
          expect(response.body).to.have.all.keys('title', 'description', 'status');
          done();
        }
      });
  });
});

describe('Task API', function() {
  it('should update data', function(done) {
    const id = '669c098343c4ce8c66427c6a'; 
    const updatedData = {
      title: 'AI-ML',
      description: 'using mathematical modeling',
      status: 'completed'
    };
    chai.request(app)
      .put(`/api/update/${id}`) 
      .send(updatedData)    
      .end((err, response) => {
        if (err) {
          done(err);
        } else {  
          expect(response.status).to.be.equal(200);
          expect(response.body).to.include(updatedData);
          done();
        }
      });
  });
});

describe('Task API', function () {
  it('should delete the data', function (done) {
    const id = '669b75633a15e9083689d521';  

    chai.request(app)
      .delete(`/api/delete/${id}`)  
      .end((err, response) => {
        if (err) {
          done(err);
        } else {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.have.property('message').that.equals('Data deleted successfully');
          done();
        }
      });
  });
});
