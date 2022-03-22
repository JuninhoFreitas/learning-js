const pessoa = {
    nome: 'João',
    idade: 19,
    toString(){
        return `Nome: ${this.nome}`
    },
    valueOf(){
        return this.idade
    }

}

console.log(String(pessoa))
console.log('Idade: ', Number(pessoa))