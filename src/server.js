const app = require("./app");

const PORT = process.env.BACKEND_PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Rodando na porta http://localhost:${PORT}`);
});

