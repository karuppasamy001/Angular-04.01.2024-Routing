import { Component } from '@angular/core';
import { UserProfiles } from '../interface';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName!: string;
  password!: string;
  confirmPassword!: string;

  storedDate: string = localStorage.getItem("users") ?? ""

  constructor(private router : Router){}

  userProfiles: {
    [key: number] : UserProfiles } = JSON.parse(this.storedDate)
   
  validate() {
    const index: number = Object.values(this.userProfiles).length  + 1

    for(let i in this.userProfiles){
      if(this.userProfiles[i].userName === this.userName){
        alert("User Name Already Exists")
        return 
      }
    }

    if(this.password.length < 8){
      alert("Password Length Must be 8 Characters")
      return
    }

    if(this.password !== this.confirmPassword){
      alert('Passwords Do Not Match with confirm password')
      return
    }

    
    this.userProfiles[index] = {userName: this.userName, password: this.password}

    alert("registered Successfully")

    console.log(this.userProfiles)

    localStorage.setItem("users", JSON.stringify(this.userProfiles))

    this.router.navigate(['/login'])

  }
}
