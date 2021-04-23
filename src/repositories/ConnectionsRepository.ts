import { EntityRepository, Repository } from "typeorm";

// Aqui tem que ter um ponto de atenção porque o typeorm também possui uma classe chamada Connection
import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {};

export { ConnectionsRepository };
