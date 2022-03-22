const item = {
    nome: 'Caneta',
    preco: 1.90,
    toString() {
        return `Item: ${this.nome} R$ ${this.preco}`
    },
    valueOf() {
        return {
            value: 'Preta'
        }
    },
    [Symbol.toPrimitive](coercionType) {

        console.log('tring to convert to', coercionType)

        const types = {
            string: JSON.stringify(this),
            number: '0007'
        }

        return types[coercionType] || types.string
    }


} 

// console.log('String', String(item))
// console.log('Number', Number(item))

// // chama a conversão default
// console.log('Date', new Date(item))


console.assert(item + 0 === '{"nome":"Caneta","preco":1.9}0')
// console.log('!!item is true', !!item)

console.assert(!!item)


// console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"nome":"Caneta","preco":1.9}')

// console.log('implict + explicit coercion (using ==)', item == String(item))
console.assert(item == String(item))


const item2 = { ...item, nome: 'Lápis', preco: 2.00}

console.log( 'New Object', item2)