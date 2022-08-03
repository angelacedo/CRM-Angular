import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModifyuserComponent } from './../../../components/modals/modifyuser/modifyuser.component';

@Injectable({
  providedIn: 'root'
})
export class ModifymodalService
{

  constructor(private dialog: MatDialog) { }


  openModifyUserDialog = (user: Object) =>
  {
    this.dialog.open(ModifyuserComponent, {
      width: "500px",
      data: {
        user
      }
    });

  };


}
