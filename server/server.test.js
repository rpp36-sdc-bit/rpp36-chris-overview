const request = require("supertest");
const app = require('./server')

test('properly running test suite', () => {
  expect('this').toBe('this')
})

describe('Testing different endpoints', () => {

  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    done();
  })

  test("It should response the GET method", done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })

  test("Testing get req to /products", done => {
    request(app)
      .get('/products')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })

  test("Testing get req to /products/:id", done => {
    request(app)
      .get('/products/1')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
  })

  test("Testing get req to /products/id/styles", done => {
    request(app)
     .get('/products/1/styles')
     .then(response => {
      expect(response.statusCode).toBe(200);
      done();
     })
  })

  test("Testing get req to /products/id/related", done => {
    request(app)
     .get('products/1/related')
     .then(response => {
      expect(response.statusCode).toBe(200);
     })
     done()
  })

})

