import { Component, OnInit } from '@angular/core';
import { UserProfileServiceService } from '../../service/user-profile-service.service';
import { User } from '../../models/user';
import { Repos } from '../../models/repos';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserProfileServiceService]
})
export class UserProfileComponent implements OnInit {

  public users: User;
  public repo: Repos;
  public username: string;

  constructor(private userProfileService: UserProfileServiceService) { }
  ngOnInit() {

  }
  findUser() {
    this.userProfileService.getUserName(this.username);
    this.userProfileService.getUserProfile();
    this.users = this.userProfileService.user;
    console.log(this.users);
  }
  showRepos() {
    this.users.showDetails = !this.users.showDetails;
  }

}
