const request = require('supertest');

const server = require('./server.js');

describe('sever.js', () => {
//   it('should set testing environment', () => {
//     expect(process.env.DB_ENV).toBe('testing');
//   });

  describe('GET /', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/hobbits')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

   
    it('should return 200 OK using the squad', async () => {
      const res = await request(server).get('/hobbits');

      expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/hobbits');

      expect(res.type).toBe('application/json');
    });

  });
});