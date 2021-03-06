import CreateCharacterModel from './CreateCharacterModel';
import Character from '../../../../domain/characters/Character';

export default interface ICreateCharacterCommand {
  execute(model: CreateCharacterModel): Promise<Character>;
}
