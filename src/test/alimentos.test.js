const request = require('supertest');
const app = require('../app.js').default; // Importa o app corretamente
//import request from 'supertest';
//import app from '../app.js';
let id;
describe("Testes da rota /alimento", () => {
  test("GET /alimento/", async () => {
    const res = await request(app).get("/alimento/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /alimento/cadastro", async () => {
    const res = await request(app)
      .post("/alimento/cadastro")
      .send({
        nome: "Banana",
        validade: "2025-12-31",
        peso: 10,
        descricao: "Alimento de teste",
        categoria: "FRUTA",
        estado: 1,
        imagem_url: "http://imagem.com/"
      });
    expect(res.statusCode).toBe(201);
     // salva o id retornado
    id = res.body.id;
    expect(id).toBeDefined(); // opcional: garante que o id veio
  });

  test("PUT /alimento/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/alimento/atualizar/${id}`)
      .send({
       nome: "Banana atualizada",
        validade: "2025-12-01",
        peso: 5,
        descricao: "Alimento de teste",
        categoria: "FRUTA",
        estado: 1,
        imagem_url: "http://imagem.com/"
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /alimento/deletar/:id", async () => {
    const res = await request(app).delete(`/alimento/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});
