import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpLoginService } from './http-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private url = "http://freeapi.miniprojectideas.com/api/User/Login"

  loginForm = new FormGroup({
    EmailId: new FormControl(''),
    Password: new FormControl('')
  })

  ngOnInit(): void {

  }

  constructor(private http:HttpClient, private router: Router, private httpLogin: HttpLoginService) {
    this.onLogin
  }

  onLogin() {
    this.httpLogin.loginUser(this.loginForm.value)
  }
}
