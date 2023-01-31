import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { User, UserDetail } from 'src/app/user.model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  selectedUser: UserDetail | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {}
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    const userId = this.activatedRoute.snapshot.params['userId'];
    if (userId) {
      this.selectedUser = this.usersService.userDetails.find(
        (user) => user.id == userId
      );
      console.log(this.selectedUser);
    }
  }
}
