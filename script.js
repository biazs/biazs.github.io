   'use strict';

    function nomeDoMes(m){
        m--;
        var meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
        if(m<0 || m>11)
            throw 'Numero do mes invalido:'+(m+1);
        return meses[m];
    }
    var mes = 13;
    
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
    
