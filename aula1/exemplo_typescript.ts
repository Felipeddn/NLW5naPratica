// exemplo de  TypeScript

interface DadosDoUsuario{
    id: string, nome: string, email: string
}

function cadastrarUsuario({ email, id, nome} : DadosDoUsuario){
    console.log(id, nome, email)
}

class CadastrarAdministrador(){
    cadastro():void {
        cadastrarUsuario("strings", "Dani", "daniele@rocketseat.team")
        return ""
    }
}


// o TypeScript para essa caso não deixa esse erro passar
class cadastrarVendedor(){
    cadastro(){
        cadastrarVendedor(1123, "Danilo", "danilo@rocketseat.team")
    }
}