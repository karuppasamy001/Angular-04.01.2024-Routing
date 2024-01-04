import { Router } from '@angular/router';
import { UserProfiles, UserStatus } from '../interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userName!: string
  password!: string

  storedData: string = localStorage.getItem("users") || "{}"
  
  userProfiles: {
    [key: number]: UserProfiles
  } = JSON.parse(this.storedData)

  constructor(private router: Router){}

  validate(){
    let flag = true

    for(let i in this.userProfiles){
      if (this.userProfiles[i].userName === this.userName && this.userProfiles[i].password === this.password) {
        flag = false
        break
      }
    }

    if(flag){
      alert("UserName or Password is Not Valid ")
      return
    }



    const data = localStorage.getItem("loginStatus") || "{}"
    let status: UserStatus = JSON.parse(data)

    status.loggedIn = true
    status.userName = this.userName

    localStorage.setItem("loginStatus",JSON.stringify(status))
    this.router.navigate(['/'])
    
  }
}
