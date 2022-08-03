import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './../../services/connection/connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numberUsers: any
  numberUsersToday: Number
  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.getAllUsers()
    this.getAllUsersToday()
  }

  getAllUsers(){
    this.connectionService.getNumberOfUsers().subscribe((totalusers: any) =>{
      this.numberUsers = totalusers
    })
  }

  getAllUsersToday(){
    this.connectionService.getNumberOfUsers().subscribe((totaluserstoday: any) =>{
      this.numberUsersToday = totaluserstoday
    })
  }
}
