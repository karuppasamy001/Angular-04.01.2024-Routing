import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

const routePath: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routePath), FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
