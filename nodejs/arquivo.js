const fs = require('fs');

//se arquivo ja existe
//if(fs.existsSync('arquivo.txt')){
  //  fs.appendFileSync('arquivo.txt', ' , acrescentando informacoes  ');
    
//}
   // else{ //se arquivo nao existe
        fs.writeFileSync('arquivo.txt','Conteudo a ser gravado'); // essa funcao cria o arquivo.txt, caso o mesmo nao exista
//}