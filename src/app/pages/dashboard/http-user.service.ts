import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUserService implements OnInit {

  private url = "http://freeapi.miniprojectideas.com/api/User/GetAllUsers"

  users: any[] = []


  constructor(private http: HttpClient) {
    this.getUsers
   }

  ngOnInit(): void {

  }

  getUsers() {
    this.http.get(this.url).subscribe(
      (res: any) => {
        return res.data
      }
    )
  }

}
