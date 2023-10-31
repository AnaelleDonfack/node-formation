// Programme qui ecoute et repond aux requetes http
//import du package http de node
const http = require('http');

//creation du server
const server = http.createServer((request, response) =>{
    response.end('voila la reponse du serveur ');
});

// Ecouter les requêtes entrantes
//process.env.PORT au cas où le port 3000 n'est pas disponible
server.listen(process.env.PORT || 3000);