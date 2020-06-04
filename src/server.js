 const express = require("express");
 const server = express();


// configurar pasta publica
server.use(express.static("public"))




// Utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})




// Configurar caminhos da minha app
// Página Inicial
// Req: requisição
// Res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um Titúlo" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})


 // ligar o servidor

 server.listen(3000)