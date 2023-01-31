import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'list/:userId',
    component: UserDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
