import {
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryColumn
} from 'typeorm';

// as uuid é para dar um nome mais compreensível
import { v4 as uuid } from 'uuid';

@Entity("settings")
class Setting {

    // como o nome da tabela e da entidade é igual não precisamos passar por parametro caso contrario fariamos assim:
    //@PrimaryColumn({name: o_nome_que_desejamos})
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    // é um método que executa toda vez que instanciamos uma classe (instanciar é criar um objeto baseado em uma classe) o construtor coloca esses elementos e métodos no momento que é instanciando assim ele herda essas características
    constructor() {
        if(!this.id) {
            // quando usamos update de dados o id estara preenchido
            this.id = uuid(); 
        }
    }
}

export { Setting }
