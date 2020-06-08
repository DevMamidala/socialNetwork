import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent {
  public logIn;
  public islogClick = false;
  constructor(private _log: FormBuilder,  public appSvc: AppService, public router: Router) {
  }
  ngOnInit() {
    this.logIn = this._log.group({
      email: ['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: ['', Validators.required]
    })
    
  }
  onClickLogIn() {
    this.islogClick = true;
    this.appSvc.postLoginData(this.logIn.value).subscribe(res=>{
      if (res && res.status && res.status === 'success') {
        localStorage.setItem('userData', JSON.stringify(res.data))
        this.appSvc.userLoggedIn();
        this.router.navigate(['/', 'list']);
      }
    });
    this.islogClick = false;
  //   this.appSvc.postLoginData(this.logIn.value).subscribe(res=>{
  //     console.log(res+'lplplplplpl')
  //  });
    console.log(this.logIn)
  }
}
