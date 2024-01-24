import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  ticketForm = new FormGroup({
    summary: new FormControl(''),
    storyPoint: new FormControl(''),
    status: new FormControl(''),
    assignedTo: new FormControl(''),
    projectShortName: new FormControl('')
  })

  private url = 'http://freeapi.miniprojectideas.com/api/Jira/GetAllTickets'

  ticketList: any[] = []
  dataSource: any
  displayedColumns: string[] = ["position", "summary", 'story', 'status', 'assigned', 'project', 'action']

  constructor(private http: HttpClient, private httpTicket: ProductsService){
    this.getTickets()
    this.onCreateTicket
  }

  ngOnInit(): void {

  }

  getTickets(){
    this.http.get(this.url).subscribe(
      (res: any) => {
        this.ticketList = res.data
        this.dataSource = new MatTableDataSource(this.ticketList)
      }
    )
  }

  onEdit(id: string) {
    let currentTicket = this.ticketList.find((ticket) => {
      return ticket.ticketId === id})
    console.log(currentTicket)
  }

  onCreateTicket() {
    this.httpTicket.createTicket(this.ticketForm.value).subscribe(
      (res: any) => {
        if (res.result) {
          alert(res.message)
          this.getTickets()
        } else {
          alert("Ticket fail to create")

        }
      }
    )
  }

  onDeleteTicket(ticketId:string) {
    this.httpTicket.deleteTicket(ticketId).subscribe(
      (res: any) => {
        this.getTickets()
        alert(`Ticket with id: ${ticketId} has been deleted!!`)
      }
    )
  }

}
