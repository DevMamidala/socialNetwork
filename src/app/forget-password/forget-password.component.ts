import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent  {
  public forgotPassword;
  public isforgotclick = false; 
  constructor(private forGet: FormBuilder, public appSvc: AppService) { }

  ngOnInit(){
    this.forgotPassword = this.forGet.group({
      email:  ['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
    })

  }
  OnforgotPw(){
    this.isforgotclick = true;
    this.appSvc.postForgotPassword(this.forgotPassword.value).subscribe(res=>{
      console.log(res+'lplplplplpl')
   });
  }

}
