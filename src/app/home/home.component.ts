import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService } from '../_services';
import { HttpClient } from '@angular/common/http';

import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];



  constructor(userService: UserService,private http: HttpClient,
    private ngxLoader: NgxUiLoaderService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.ngxLoader.start();
  this.http.get(`https://api.npmjs.org/downloads/range/last-month/ngx-ui-loader`).subscribe((res: any) => {
    console.log(res);
    this.ngxLoader.stop();
  });
  }

}
