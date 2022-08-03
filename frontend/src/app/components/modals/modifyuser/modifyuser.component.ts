import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConnectionService } from './../../../services/connection/connection.service';

@Component({
  selector: 'app-modifyuser',
  templateUrl: './modifyuser.component.html',
  styleUrls: ['./modifyuser.component.css']
})
export class ModifyuserComponent implements OnInit
{
  constructor(private connectionService: ConnectionService, private dialogRef: MatDialogRef<ModifyuserComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  )
  {

  }

  ngOnInit()
  {

  }


  modifyUser = (f: NgForm) =>
  {
    this.connectionService.updateUser(f.form.value).subscribe((data) =>
    { this.data.user = data; });
    const row = document.querySelector("#row-" + this.data.user._id)
    row!.children[0].textContent = this.data.user.full_name;
    row!.children[1].textContent = this.data.user.occupation;
    this.dialogRef.close();
  };

}
