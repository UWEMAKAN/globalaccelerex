import ICharacterRepositoryFacade from './ICharacterRepositoryFacade';
import Character from '../../../../../../domain/characters/Character';
import Location from '../../../../../../domain/locations/Location';
import ICharacterRepository from '../../../../../interfaces/persistence/ICharacterRepository';
import ILocationRepository from '../../../../../interfaces/persistence/ILocationRepository';
import IEpisodeRepository from '../../../../../interfaces/persistence/IEpisodeRepository';
import Episode from '../../../../../../domain/episodes/Episode';

class CharacterRepositoryFacade implements ICharacterRepositoryFacade {
  private readonly characterRepository: ICharacterRepository;
  private readonly episodeRepository: IEpisodeRepository;
  private readonly locationRepository: ILocationRepository;

  constructor(
    characterRepository: ICharacterRepository,
    episodeRepository: IEpisodeRepository,
    locationRepository: ILocationRepository
  ) {
      this.characterRepository = characterRepository;
      this.episodeRepository = episodeRepository;
      this.locationRepository = locationRepository;
  }
  public async getLocation(locationId: number): Promise<Location> {
    return this.locationRepository.get(locationId);
  }
  public async getEpisodes(episodeIds: Array<number>): Promise<Array<Episode>> {
    const episodes = episodeIds.map((id) => {
      return this.episodeRepository.get(id);
    });
    return Promise.all(episodes);
  }
  public async addCharacter(character: Character): Promise<Character> {
    return this.characterRepository.add(character);
  }
}

export default CharacterRepositoryFacade;
