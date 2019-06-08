import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileServiceService } from '../app/service/user-profile-service.service';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
