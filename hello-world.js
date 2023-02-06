//1- Écrire un programme pour imprimer « HELLO WORLD » sur la console

console.log("HELLO WORLD");

//2- Créer un serveur

var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'Content_Type' : 'text/plain'});
    response.end('<h1>Hello Node!!!! </h1>\n')
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');

/*3- Dans cette tâche, vous allez :

Tout d’abord, demandez au système de fichiers de créer un fichier nommé « welcome.txt » contenant une ligne « Hello Node ».
Deuxièmement, créez un programme qui lit et console.log données de hello.txt
*/

var fs = require('fs')
fs.writeFileSync('welcome.txt', 'Hello Node')

var data = fs.readFileSync('welcome.txt')
console.log(data.toString());