import { Injectable } from '@angular/core';
import { UserProfiles, UserStatus } from './interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  static userCount: number = 0;

  static userName: string = '';
  static loggedIn: boolean = false;

  userProfiles: {
    [key: number]: UserProfiles;
  } = {};

  loginStatus: UserStatus = {
    userName: "",
    loggedIn: false
  }

  constructor() {
    localStorage.setItem("users", JSON.stringify(this.userProfiles))
    localStorage.setItem("loginStatus", JSON.stringify(this.loginStatus))
  }
}
