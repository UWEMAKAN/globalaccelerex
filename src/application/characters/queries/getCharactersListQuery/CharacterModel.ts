import Episode from '../../../../domain/episodes/Episode';
import Location from '../../../../domain/locations/Location';

class Character {
  private id: number;
  private firstName: string;
  private lastName: string;
  private status: string;
  private stateOfOrigin: string;
  private gender: string;
  private location: Location;
  private episodes: Array<Episode>
  private created: Date;
  
  public set Created(v : Date) {
    this.created = v;
  }

  public get Created() : Date {
    return this.created;
  }

  public set Episodes(v : Array<Episode>) {
    this.episodes = v;
  }

  public get Episodes() : Array<Episode> {
    return this.episodes;
  }

  public set Location(v : Location) {
    this.location = v;
  }

  public get Location() : Location {
    return this.location;
  }

  public set Gender(v : string) {
    this.gender = v;
  }

  public get Gender() : string {
    return this.gender;
  }

  public set StateOfOrigin(v : string) {
    this.stateOfOrigin = v;
  }

  public get StateOfOrigin() : string {
    return this.stateOfOrigin;
  }

  public set Status(v : string) {
    this.status = v;
  }

  public get Status() : string {
    return this.status;
  }

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
  }

  public set FirstName(v : string) {
    this.firstName = v;
  }

  public get FirstName() : string {
    return this.firstName;
  }

  public set LastName(v : string) {
    this.lastName = v;
  }

  public get LastName() : string {
    return this.lastName;
  }
}

export default Character;
