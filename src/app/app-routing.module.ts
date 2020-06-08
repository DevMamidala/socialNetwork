import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './login/logIn.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListComponent } from './list/list.component';
import { AppService } from './app.service'; 

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'forgotpassword', component:ForgetPasswordComponent},
  {path:'login', component: LogInComponent},
  {path:'signup', component: SignUpComponent},
  {path:'list', component: ListComponent, canActivate: [AppService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
