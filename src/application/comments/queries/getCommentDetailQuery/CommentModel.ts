import Episode from '../../../../domain/episodes/Episode';

class Comment {
  private id: number;
  private comment: string;
  private ipAddressLocation: string;
  private episode: Episode;
  private created: Date;

  public set Created(v : Date) {
    this.created = v;
  }

  public get Created() : Date {
    return this.created;
  }

  public set Episode(v : Episode) {
    this.episode = v;
  }

  public get Episode() : Episode {
    return this.episode;
  }

  public set IpAddressLocation(v : string) {
    this.ipAddressLocation = v;
  }

  public get IpAddressLocation() : string {
    return this.ipAddressLocation;
  }

  public set Comment(v : string) {
    this.comment = v;
  }

  public get Comment() : string {
    return this.comment;
  }

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
  }
}

export default Comment;
