import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectionService } from './../../../services/connection/connection.service';
import { ReloadComponentService } from './../../../services/reload-component.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit
{
  public newUser: any;
  constructor(private connectionService: ConnectionService, private reloadComponentService: ReloadComponentService) { }

  ngOnInit(): void
  {
  }

  addUser = (f: NgForm) =>
  {
    console.log(f.form.value);
    this.connectionService.addUser(f.form.value).subscribe(() =>
    {
      this.reloadComponentService.sendUpdate("updateUserManagerComponent")
    });

  };

}
