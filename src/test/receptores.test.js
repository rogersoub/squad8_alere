const request = require('supertest');
const app = require('../app.js').default; // Importa o app corretamente
//import request from 'supertest';
//import app from '../app.js';
let id;
describe("Testes da rota /receptor", () => {
  test("GET /receptor/", async () => {
    const res = await request(app).get("/receptor/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /receptor/cadastro", async () => {
    const res = await request(app)
      .post("/receptor/cadastro")
      .send({
         nome: "Maria",                  
         tipo:  "PF",                   
         endereco: "Rio de Janeiro",               
         contato: "40028922000",               
         capacidade_recebimento: "300", 
         alimentos_recebidos: "100"
      });
    expect(res.statusCode).toBe(201);
    // salva o id retornado
    id = res.body.id;
    expect(id).toBeDefined(); // opcional: garante que o id veio
  });

  test("PUT /receptor/atualizar/:id", async () => {
    const res = await request(app)
      .put(`/receptor/atualizar/${id}`)
      .send({
       nome: "Maria",                  
         tipo:  "PF",                   
         endereco: "Rio de Janeiro",               
         contato: "40028922000",               
         capacidade_recebimento: "300", 
         alimentos_recebidos: "100"
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /receptor/deletar/:id", async () => {
    const res = await request(app).delete(`/receptor/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});
