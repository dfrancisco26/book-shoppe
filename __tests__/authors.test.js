const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('author routes', () => {
  
  beforeEach(() => {
    return setup(pool);
  });

  it('returns a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(3);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String)
    });
  });


  it('/authors/:id should return author details', async () => {
    const resp = await request(app).get('/authors/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'D.F.',
      pob: 'Nowhere',
      dob: 1992
    });
  });

  afterAll(() => {
    pool.end();
  });

});
