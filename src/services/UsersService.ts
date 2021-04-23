import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

// como vamos receber apenas o email não iremos criar uma interface.
class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        
        // verificar se usuario existe
        const userExists = await this.usersRepository.findOne({
            email
        })

        // Se existir retornar user
        if(userExists) {
            return userExists;
        }
        
        // se não existir salvar no banco de dados
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        // const usersRepository = getCustomRepository(UsersRepository);
          const user = await this.usersRepository.findOne({
            where: {
              email,
            },
          })
    
          return user;
    }

}

export { UsersService }