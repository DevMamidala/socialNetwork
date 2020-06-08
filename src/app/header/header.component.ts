import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUserData:any;
  constructor(public router:Router, public appSvc:AppService) { }

  ngOnInit() {
    this.appSvc.handleEmitterData$.subscribe(result => {
      this.loggedInUserData = JSON.parse(localStorage.getItem('userData'));
    });
  }

  logout(){
    localStorage.clear();
    this.loggedInUserData  = false;
    this.router.navigate(['/', 'login']);
  }

}
