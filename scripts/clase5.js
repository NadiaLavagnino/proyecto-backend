const fs = require('fs')
const crypto = require('crypto')
const { Console } = require('console')


class userMananger{
    constructor(path){
        this.path= path
    }

    async createUser(user){
        try{
            const cipher = crypto.createCipher('aes192','a password')
            let encrypted = cipher.update(user.password, 'utf-8','hex')
            encrypted += cipher.final('hex')
            let credentials = {
                username: user.username,
                password: encrypted
            }

            await fs.promises.writeFile(this.path, JSON.stringify(credentials, null, 2), 'utf-8')
            console.log('usuario guardado')
        } catch (err) {
            console.log('Error al crear usuario', err)
        }
    }

    async validateUser(user){
        
        try {
            let userFound = await fs.promises.readFile(this.path, 'utf-8')
            console.log(userFound)
            let userExits = JSON.parse(userFound)
            console.log(userExits.password)

            const decipher = crypto.createDecipher('aes192','a password')
            let encrypted = userExits.password
            let descryted = decipher.update(encrypted, 'hex', 'utf8')
            descryted += decipher.final('utf8')
            console.log(descryted)

            if (user.username == userExits.username && descryted == user.password){
                console.log('usuario logueado')
            }else{
                console.log('usuario no encontrado')
            }
        }catch (err) {
                Console.log('error al loguar usuario', err)
            }
        }    
}

let newUser = new userMananger('./usuario.json')
// newUser.createUser({username: 'Nadia Lavagnino', password:'212121'})
newUser.validateUser({username: 'Nadia Lavagnino', password:'212121'})