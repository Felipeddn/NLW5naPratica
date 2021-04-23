import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {

    private settingsRepository: Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({chat, username}: ISettingsCreate) {
        //select * from settings where username = "username" limit 1;
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }

        // as demais opções serão geradas automaticamente, essa é a criação do objeto
        const settings = this.settingsRepository.create({
            chat,
            username,
        })

        await this.settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username: string){
        const setting = await this.settingsRepository.findOne({
            username
        })
        
        return setting;
    }   

    async update(username: string, chat: boolean) {
        const settings = await this.settingsRepository.createQueryBuilder().
        update(Setting)
        .set({ chat })
        .where("username == :username", {
            username
        }).execute();
    }
}

export { SettingsService }