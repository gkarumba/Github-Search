import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repos } from '../models/repos';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {

  public user: User;
  public repo: Repos;
  public username: string;
  apiUrl: 'https://api.github.com/users//?access_token=';
  apiRepoUrl: 'https://api.github.com/users/${name}/repos';

  constructor(private http: HttpClient) {
    this.user = new User('', 0, 0, 0, '', 0, '', '');
    this.repo = new Repos('', '', '', '', '');
  }
    getUserName(username: string) {
      this.username = username;
    }

    getUserProfile() {
      interface UserResponse {
        login: string;
        followers: number;
        following: number;
        public_repos: number;
        url: string;
        projects: number;
        avatar_url: string;
        location: string;
      }
      const promise = new Promise((resolve, reject) => {
        this.http.get<UserResponse>(`https://api.github.com/users/${this.username}/?access_token=environment.apiKey`).toPromise().then(response => {
          this.user.username = response.login;
          this.user.followers = response.followers;
          this.user.following = response.following;
          this.user.repos = response.public_repos;
          this.user.projects = response.projects;
          this.user.location = response.location;
          this.user.profilePic = response.avatar_url;
          this.user.profileUrl = response.url;
          resolve();
        },
        error => {
          this.user.username = 'Unavailable';
          this.user.followers = 0;
          this.user.following = 0;
          this.user.repos = 0;
          this.user.projects = 0;
          this.user.location = 'Unavailable';
          this.user.profilePic = 'Unavailable';
          this.user.profileUrl = 'Unavailable';
          reject(error);
        });
      });
      return promise;
    }
    getUserRepo() {
      interface UserRepo {
        name: string;
        description: string;
        url: string;
        language: string;
        created_at: string;
      }
      const promise = new Promise((resolve, reject) => {
        this.http.get<UserRepo>(`https://api.github.com/users/${this.username}/repos`).toPromise().then(response => {
          this.repo.repoName = response.name;
          this.repo.repoDescription = response.description;
          this.repo.repoUrl = response.url;
          this.repo.language = response.language;
          this.repo.createdOn = response.created_at;
          resolve();
        },
        error => {
          this.repo.repoName = 'unavailable';
          this.repo.repoDescription = 'unavailable';
          this.repo.repoUrl = 'unavailable';
          this.repo.language = 'unavailable';
          this.repo.createdOn = 'unavailable';
          reject(error);
        });
      });
      return promise;
    }
  }

