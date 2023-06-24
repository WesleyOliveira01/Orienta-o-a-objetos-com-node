import Admin from "./Admin.js";
import Docente from "./Docente.js";
import User from "./User.js" ;

class usuario{
    #nome
    #email
    constructor(nome,email){
        this.#nome = nome
        this.#email = email
    }

    
    get nome(){
        return this.#nome
    }
    set nome(value){
        return this.#nome = value
    }
}

const user = new usuario("wesley","m@m")

user.nome = "wesley editado"

console.log(user.nome)