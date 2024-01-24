import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://freeapi.miniprojectideas.com/api/Jira/CreateTicket'
  private delete_url = 'https://freeapi.miniprojectideas.com/api/Jira/DeleteTicketById?id='

  constructor(private http:HttpClient) { }

  createTicket(ticketObj: any) {
    debugger;
    return this.http.post(this.url, ticketObj)
  }



  deleteTicket(ticketId:string) {
    return this.http.delete(this.delete_url + ticketId)
  }

}
