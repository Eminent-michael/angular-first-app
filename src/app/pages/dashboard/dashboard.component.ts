import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpUserService } from './http-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  private url = "http://freeapi.miniprojectideas.com/api/User/GetAllUsers"

  users: any[] = [];

  constructor(private http: HttpClient, private httpUser: HttpUserService) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get(this.url).subscribe(
      (res: any) => {
        this.users = res.data
      }
    )
  }

  ngOnInit(): void {

  }
}
