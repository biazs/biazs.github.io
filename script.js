   'use strict';

var counter = function(){
    var i=0;
    return{
        get: function(){
            return i;
        },
        set: function(val){
            i=val;
        },
        increment:function(){
            return ++i;
        }
    }
}();
counter.set(3);
counter.increment();
console.log(counter.get());

var x =2;
(function (n){
    function init(){
        x += n;
        console.log(x);
    }
    init();
}(1));
console.log(x);



    console.log(Number("1") - 1 ===0);

var x=3;
var o1 ={
    x:2,
    o2:{
        x:1,
        o3:function(){
            return this.x;
        }
    }
}
console.log(o1.o2.o3());




    function nomeDoMes(m){
        m--;
        var meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
        if(m<0 || m>11)
            throw 'Numero do mes invalido:'+(m+1);
        return meses[m];
    }
    var mes = 13;
    
    function soma(x,y){
        console.log(arguments);
        switch(arguments.length){
            case 0: return 0;
            case 1: return x;
            default: return x+y;
        }
    }
    console.log(soma(5,4));

    try{
        console.log(mes+' : '+nomeDoMes(mes));
    }catch(e){
        console.log(e);
    }finally{
        console.log("Final");
    }

    try{
        //console.log(zum);
        throw "...ocorreu um erro de teste";
    }catch(erro){
        console.log("Deu erro: "+erro);   
        }

    var a = -1;
    var x = true;
    var y = false;
    a>=0?console.log(x):console.log(y); // if a>=0 retorna X senao retorna Y
  



    function soma(x, y)
    {
        return x + y;
    }

    console.log("Funçāo soma: 3+5="+ soma(3,5));

    //Teste de exibiçao de variaveis
    var a =10;

    function f(){
        var a =5;
        console.log(a);
    }
    console.log(a);
    f();
    console.log(a);

    //teste undefined
    console.log(b); // variable hoisting
    var b=null;
    if(!b)
        console.log("b nao foi inicializada");
    else
        console.log(b);


    //var nomeDoCliente; // camel case
    //var nome_do_cliente; // snake case
    //var CLIENTE; // CONSTANTES
    //var Cliente; // classes


    //tipo de dados
    var b=true; //boolean
    var n=10.5; //number
    var s="Jose"; //string
    var z=null;
    var u; // undefined
    console.log("12"-3);
    console.log("12"+3);
    var t=12;
    console.log("Soma das variaveis com parseFloat: "+parseFloat(t)+3);

    console.log("Numero de letras: "+s.length);
    var frutas = ['maca','banana', 'laranja'];
    console.log(frutas);
    var cliente = {
        nome: 'Maria',
        sobrenome: 'Reis',
        idade:35,
        clienteAtual:false,
        nomeCompleto: function(){
            return this.nome+' '+this.sobrenome;
        }
    };
    console.log(cliente);
    console.log('idade:'+cliente.idade);
    console.log(cliente.nomeCompleto());
    


//VETORES
    var frutas = [];
    frutas[0]='laranja';
    frutas[1]='maca';
    frutas[2]='pera';
    frutas[3]='banana';

    var fn = frutas.forEach(function(f){
        console.log(f);
    });
    console.log(frutas.join(','));

var v1 = [3,1,5,4,2];
console.log(v1.sort());
console.log(v1.reverse());
console.log(v1.slice(2,3));
console.log(v1.splice(2));



//OBJETOS
var pessoa = {
    nome: 'Joao',
    sobrenome: "Silva",
    idade: '35',
    casado: 'false',
    contatos: ['(31)32321212','fulano@gmail.com'],
    nomeCompleto: function(){
        return this.nome+' '+this.sobrenome;
    },
    endereco: {
        rua: 'Av Brasil',
        numero: 110
    }
};
console.log(pessoa);
console.log(pessoa.nomeCompleto());
console.log(pessoa.idade);

var joao = Object.create(pessoa);


var ranking = {
    pos: 0,
    get getPos(){
        return ("0"+this.pos).substr(-2);
    },
    set setPos(n){
        if(n>0 && n<=100)
            this.pos = n;
        else
            console.log('erro: n fora da faixa');
    }
};

console.log(ranking.getPos);
ranking.setPos = 7;
console.log(ranking.getPos);
ranking.setPos = 100;
console.log(ranking.getPos);