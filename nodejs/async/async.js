const getSoma = (a,b,callback) => {
    setTimeout(() =>{
        const soma = {
            soma: a + b
        }
        callback(soma)
    },1000)
}

const a = 1
const b = 2
getSoma(a, b, (data) => {
    console.log(data)
})