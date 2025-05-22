const request = require('supertest');
const app = require('../app.js').default; // Importa o app corretamente

describe("Testes da rota /doacao", () => {
  test("GET /doacao/", async () => {
    const res = await request(app).get("/doacao/");
    expect(res.statusCode).toBe(200);
  });

  test("POST /doacao/cadastro", async () => {
    const res = await request(app)
      .post("/doacao/cadastro")
      .send({
        alimento_nome: "Banana", 
        quantidade: 10, 
        doador_nome: "João",
        data_doacao: "2023-10-01", 
        localizacao: "Rua A, 123",
        validado: true,
      });
    expect(res.statusCode).toBe(201);
  });

  test("PUT /doacao/atualizar/:id", async () => {
    const id = "b8baa551-eba1-4bef-923c-47db13cec93f"; // Altere para um ID real se necessário
    const res = await request(app)
      .put(`/doacao/atualizar/${id}`)
      .send({
        alimento_nome: "Banana", 
        quantidade: 10, 
        doador_nome: "João",
        data_doacao: "2023-10-01", 
        localizacao: "Rua A, 123",
        validado: true,
      });
    expect(res.statusCode).toBe(200);
  });

  test("DELETE /doacao/deletar/:id", async () => {
    const id = "b8baa551-eba1-4bef-923c-47db13cec93f"; // Altere para um ID real se necessário
    const res = await request(app).delete(`/doacao/deletar/${id}`);
    expect(res.statusCode).toBe(200);
  });
});