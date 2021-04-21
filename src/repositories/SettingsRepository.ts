import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";


// assim acessamos os métodos já criados para select, insert, delete, update...
// estamos herdandos esses métodos que seja publico
@EntityRepository(Setting)
class SettingsRepository extends Repository <Setting> {}

export { SettingsRepository }