import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { NgxUiLoaderService } from 'ngx-ui-loader';

import { ToastrService } from 'ngx-toastr';


import { AlertService, AuthenticationService } from '../_services';
import { timeout } from 'q';

@Component({templateUrl: 'login.component.html',
styleUrls: ['login.component.css']})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  req=false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private toastr: ToastrService,
        private http: HttpClient,
  private ngxLoader: NgxUiLoaderService
         ) {}

    ngOnInit() {
       
       
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
           
        });
        
       
        this.authenticationService.logout();

        
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    //formfield
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        
        
        if (this.loginForm.invalid) {
           
            return;
                }
        
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.toastr.success('Login Successful!!');

                },
                error => {
                    //alert("Bad Credentials")
                   this.toastr.error('Bad Credentials!!');


                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
