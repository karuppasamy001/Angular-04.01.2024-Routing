import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { UserStatus } from '../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  loginStatus: UserStatus = JSON.parse(localStorage.getItem("loginStatus") ?? "")
  userName: string = this.loginStatus.userName
  loggedIn: boolean = this.loginStatus.loggedIn

}
