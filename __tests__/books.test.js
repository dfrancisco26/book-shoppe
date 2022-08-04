const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  
  beforeEach(() => {
    return setup(pool);
  });

  it('#GET /books should return a list of books', async () => {
    const resp = await request(app).get('/books');
    expect(resp.body.length).toEqual(7);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String)
    });
  });


  it('#GET /books/:id should return book detail', async () => {
    const resp = await request(app).get('/books/1');
    expect(resp.body).toEqual({
      id: '1',
      author: 'D.F.',
      title: 'SQL for dummies',
      released: 1992,
    });
  });


  it('#POST /books should create a new book', async () => {
    const newBook = {
      title: 'another one',
      author: 'D.F.',
      released: 2022,
    };
    const resp = await request(app).post('/books').send(newBook);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newBook,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
