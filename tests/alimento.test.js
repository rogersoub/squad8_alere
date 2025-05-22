// tests/alimento.test.js
import request from 'supertest';
import app from '../src/app.js';

describe('Testes para alimentos', () => {
  it('Deve retornar status 200 e um array de alimentos', async () => {
    const res = await request(app).get('/alimento');
    expect(res.statusCode).toBe(200);
  });
});