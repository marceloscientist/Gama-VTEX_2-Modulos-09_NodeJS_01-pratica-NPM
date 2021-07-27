const http = require('http');
const url = require('url');
const queryString = require('query-string')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {


  // Pegar a pergunta na url 
  const urlLimpa = url.parse(req.url, true).search;
  const params = queryString.parse(urlLimpa);
  
  // Verificar a pergunta e escolher uma resposta
  let resposta;
  if(params.pergunta == 'melhor-filme') {
    resposta = 'Paulo'
  } else if(params.pergunta == 'melhor-tech-backend') {
    resposta = 'NodeJS'
  } else {
    resposta = 'Não sei mesmo =/'
  }


  // Retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
