import { Component } from '@angular/core';
import { UserStatus } from './interface';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  login!: boolean 
  register!: boolean 
  logout!: boolean 

  constructor(private router: Router){

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLoginStatus();
      }
    });

  }

  updateLoginStatus(){
    const data: UserStatus = JSON.parse(localStorage.getItem("loginStatus") || "{}" )

    if(data.loggedIn){
      this.login = false
      this.register = false
      this.logout = true
    }
    else{
      this.logout = false
      this.login = true
      this.register = true
    }
  } 
    
}
