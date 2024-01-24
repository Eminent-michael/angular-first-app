import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpLoginService implements OnInit{

  private url = "http://freeapi.miniprojectideas.com/api/User/Login"

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  loginUser(loginObj: any) {
    this.http.post(this.url, loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert("Login Successful");
          localStorage.setItem("loginToken", res.data.token)
          this.router.navigateByUrl('/dashboard')
        } else{
          alert(res.message)
        }
      }
    )
  }
}
