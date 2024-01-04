import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { UserStatus } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {


  constructor(private router: Router){
    const data: UserStatus = JSON.parse(localStorage.getItem("loginStatus") || "{}")

    data.loggedIn = false
    data.userName = ""

    localStorage.setItem("loginStatus", JSON.stringify(data))

    router.navigate(['/'])
  }
}
