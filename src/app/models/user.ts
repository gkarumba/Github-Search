export class User {
  showDetails: boolean;
  constructor(
    public username: string,
    public followers: number,
    public following: number,
    public repos: number,
    public profileUrl: string,
    public projects: number,
    public profilePic: string,
    public location: string
  ) {
    this.showDetails = false;
  }
}
