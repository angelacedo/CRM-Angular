import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './../../../components/modals/adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class AddmodalService
{

  constructor(private dialog: MatDialog) { }


  openAddUserModal = () =>
  {
    this.dialog.open(AddUserComponent, { width: "500px" });
  };

}
