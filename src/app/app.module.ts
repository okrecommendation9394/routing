import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { AppRouting } from './app-routing.module';
import { UsersService } from './users.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailsComponent, HomeComponent],
  imports: [BrowserModule, AppRouting],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
