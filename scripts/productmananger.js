const fs = require('fs')

class productMananger {
    constructor(path){
        this.path= path;
        this.id=0;
    }
    
    async getProducts(prod){
        let producto = await fs.promise.readFile(this.path, 'uft-8')
        console.log(producto)
    }

    async addProducts(prod){
        let producto = await fs.promises.readFile(this.path, 'utf-8')
        let products = JSON.parse(producto)
        products.push(prod)

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8')
        return "Archivo guardado correctamente"
    }
}



let productos1 = new productMananger('./productos.json')
console.log(productos1.addProducts({id:1, name: "jean", price:25000}))