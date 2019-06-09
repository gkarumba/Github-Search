import { Component, OnInit, Input } from '@angular/core';
import { Repos } from '../../models/repos';
@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit {

  @Input() repos: Repos;
  constructor() { }

  ngOnInit() {
  }

}
