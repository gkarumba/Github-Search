export class User {
  showDetails: boolean;
  constructor(
    public username: string,
    public followers: number,
    public following: number,
    public repos: number,
    public stars: number,
    public projects: number,
    public profilePic: string
  ) {
    this.showDetails = false;
  }
}
