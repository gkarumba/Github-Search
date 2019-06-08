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

  user: User;
  repo: Repos;
  constructor(private userProfileService: UserProfileServiceService) { }
    
  ngOnInit() {
  }

}
