import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public signupForm;
  public respMessage;
  isClicked: boolean = false;
  constructor(private fd: FormBuilder, public appSvc: AppService) { }

  ngOnInit(){
    this.signupForm = this.fd.group({
      firstName: ['',[Validators.required]],
      lastName :['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: ['',[Validators.required]],
      cpassword :['',[Validators.required]],
      gender:['',[Validators.required]],
      phone:['',[Validators.required]]
    })
  }
  onclickSubmit() {
    this.isClicked = true;
    this.appSvc.postData(this.signupForm.value).subscribe(res=>{
      this.respMessage = res.message;
      if (res && res.status && res.status === 'success') {
        this.signupForm.reset();
        this.isClicked = false;
      }
    });
  }
  onchangeemail(){
    console.log(this.signupForm)
  }
}
