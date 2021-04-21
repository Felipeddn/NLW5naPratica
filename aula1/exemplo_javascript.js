// exemplo JavaScript

//imagine que o programador 1 fez esse código

function cadastrarUsuario(id, nome, email){
    console.log(id, name, email)
}

class cadastrarAdministrador(){

    cadastro(){
        cadastrarUsuario("string", "Dani", "daniele@rocketseat.team")
    }
}

// e o programador 2 vai fazer esse código, ele colocou no primeiro campo um valor númerico mas na classe acima foi considerado um valor do tipo string porém o JavaScript não aponta o erro. O TypeScript ajuda nesses problemas

class CadastrarVendedor(){
    cadastro(){
        cadastrarUsuario(1234, "Danilo", "danilo@rocketseat.team")
    }
}