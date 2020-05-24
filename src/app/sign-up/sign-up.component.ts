import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public signupForm;
  isClicked: boolean = false;
  constructor(private fd: FormBuilder) { }

  ngOnInit(){
    this.signupForm = this.fd.group({
      first_name: ['',[Validators.required]],
      last_name :['',[Validators.required]],
      email: ['',[Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      password: ['',[Validators.required]],
      cpassword :['',[Validators.required]],
      mem_name :['',[Validators.required]],
      gender:['',[Validators.required]],
      contactnum:['',[Validators.required]],
      contactnum2 : [''],
    })
  }
  onclickSubmit() {
    this.isClicked = true;
    console.log(this.signupForm)
  }
  onchangeemail(){
    console.log(this.signupForm)
  }
}
