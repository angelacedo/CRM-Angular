import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteuserComponent } from './../../../components/modals/deleteuser/deleteuser.component';


@Injectable({
  providedIn: 'root'
})
export class DeletemodalService
{

  constructor(private dialog: MatDialog)
  {
  }
  ngOnInit()
  {
  }
  openDeleteUserModal = (id: String) =>
  {
    const modal = this.dialog.open(DeleteuserComponent);
    modal.componentInstance.$id = id;
  };
}
