import IRepository from './IRepository';
import Episode from '../../../domain/episodes/Episode';

export default interface IEpisodeRepository extends IRepository<Episode> {
  getById(id: number): Promise<Episode>;
  update(episode: Episode): Promise<Episode>;
}
