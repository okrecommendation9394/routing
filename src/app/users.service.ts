import { Injectable } from '@angular/core';
import { User, UserDetail } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: User[] = [
    {
      id: 1,
      username: 'Keti',
    },
    {
      id: 2,
      username: 'Keti',
    },
    {
      id: 3,
      username: 'Keti',
    },
    {
      id: 4,
      username: 'Keti',
    },
    {
      id: 5,
      username: 'Keti',
    },
  ];
  userDetails: UserDetail[] = [
    {
      id: 1,
      username: 'Keti',
      firstName: 'Keti',
      lastName: 'Gogia',
      aboutMe: 'about Keti',
    },
    {
      id: 2,
      username: 'Keti',
      firstName: 'Keti',
      lastName: 'Gogia',
      aboutMe: 'about Keti',
    },
    {
      id: 3,
      username: 'Keti',
      firstName: 'Keti',
      lastName: 'Gogia',
      aboutMe: 'about Keti',
    },
    {
      id: 4,
      username: 'Keti',
      firstName: 'Keti',
      lastName: 'Gogia',
      aboutMe: 'about Keti',
    },
    {
      id: 5,
      username: 'Keti',
      firstName: 'Keti',
      lastName: 'Gogia',
      aboutMe: 'about Keti',
    },
  ];
  constructor() {}
}
