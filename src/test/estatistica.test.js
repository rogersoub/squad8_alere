//const request = require('supertest');
//const app = require('../app.js').default; // Importa o app corretamente
import request from 'supertest';
import app from '../app.js';

describe("Testes da rota /estatistica", () => {
  test("GET /estatistica/", async () => {
    const res = await request(app).get("/estatistica/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /estatistica/cadastro", async () => {
    const res = await request(app)
      .post("/estatistica/cadastro")
      .send({
        mais_desperdicados: "Maçã",
        total_alimentos: 100,
        total_doacoes: 50,
        total_recebidos: 30,
        ranking_categoria: "Frutas",
      });
    expect(res.statusCode).toBe(201);
  });

  test("PUT /estatistica/atualizar/:id", async () => {
    const id = "b8baa551-eba1-4bef-923c-47db13cec93f"; // Altere para um ID real se necessário
    const res = await request(app)
      .put(`/estatistica/atualizar/${id}`)
      .send({
        mais_desperdicados: "Maçã",
        total_alimentos: 100,
        total_doacoes: 50,
        total_recebidos: 30,
        ranking_categoria: "Frutas",
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /estatistica/deletar/:id", async () => {
    const id = "b8baa551-eba1-4bef-923c-47db13cec93f"; // Altere para um ID real se necessário
    const res = await request(app).delete(`/estatistica/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});