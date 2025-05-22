const request = require('supertest');
const app = require('../app.js'); // Corrigido para CommonJS
//import request from 'supertest';
//import app from '../app.js';
describe("Testes da rota /notificacao", () => {
  let idCriado;

  test("POST /notificacao/cadastro", async () => {
    const res = await request(app)
      .post("/notificacao/cadastro")
      .send({
        categoria: "IMPORTANTE",
        mensagem: "Cadastro finalizado",
        destinatario: "Armazem",
        lida: true,
      });
    expect(res.statusCode).toBe(201);
    idCriado = res.body.id; // armazena o ID retornado
  });

  test("GET /notificacao/", async () => {
    const res = await request(app).get("/notificacao/");
    expect(res.statusCode).toBe(200);
  });

  test("PUT /notificacao/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/notificacao/atualizar/${idCriado}`)
      .send({
        categoria: "IMPORTANTE",
        mensagem: "Cadastro atualizado",
        destinatario: "Armazem",
        lida: false,
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /notificacao/deletar/:id", async () => {
    const res = await request(app).delete(`/notificacao/deletar/${idCriado}`);
    expect(res.statusCode).toBe(200);
  });
});
