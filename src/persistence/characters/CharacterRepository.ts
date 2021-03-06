import { Repository, Connection } from 'typeorm';
import logger from '../../common/winston';
import Character from '../../domain/characters/Character';
import ICharacterRepository from '../../application/interfaces/persistence/ICharacterRepository';
import AbstractRepository from '../shared/AbstractRepository';

class CharacterRepository extends AbstractRepository<Character> implements ICharacterRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }

  public async getById(id: number): Promise<Character> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<Character> = await connection.getRepository(this.repositoryType);
      const character = await repository.createQueryBuilder('character')
      .leftJoinAndSelect('character.episodes', 'episode')
      .leftJoinAndSelect('character.location', 'location')
      .where('character.id = :id', { id })
      .getOne();

      await connection.close();
      return character ? character : new Character();
    } catch (err) {
      await connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }

  public async getAll(): Promise<Array<Character>> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<Character> = await connection.getRepository(this.repositoryType);
      const characters = await repository.createQueryBuilder('character')
      .leftJoinAndSelect('character.episodes', 'episode')
      .leftJoinAndSelect('character.location', 'location')
      .getMany();
      await connection.close();
      return characters;
    } catch (err) {
      await connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }
}

export default CharacterRepository;
