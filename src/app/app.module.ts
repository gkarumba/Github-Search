import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserProfileServiceService } from '../app/service/user-profile-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDetailsComponent } from './components/user-profile-details/user-profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
