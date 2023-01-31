import { Component, Input } from '@angular/core';
import { User, UserDetail } from '../user.model';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  //@Input() user: User | undefined;
  get users() {
    return this.usersService.userList;
  }
  constructor(private usersService: UsersService) {}
}
