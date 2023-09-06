const fs = require('fs') //fs é file system - Nome od módulo é igual a variável, manter padrão de programas

fs.readFile('arquivo.txt', 'utf8', (err, data) => {


    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }

}) //são como classes e objetos. tem métodos.