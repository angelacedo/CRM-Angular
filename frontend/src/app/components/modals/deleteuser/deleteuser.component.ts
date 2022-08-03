import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ConnectionService } from './../../../services/connection/connection.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit
{
  private id: String = "";



  constructor(private connectionService: ConnectionService, public dialogRef: MatDialogRef<DeleteuserComponent>) { }

  ngOnInit()
  {

  }
  /**
   * Getter $id
   * @return {String }
   */
  public get $id(): String
  {
    return this.id;
  }

  /**
   * Setter $id
   * @param {String } value
   */
  public set $id(value: String)
  {
    this.id = value;
  }

  deleteUser = () =>
  {

    this.connectionService.deleteUser(this.id).subscribe((data) =>
    {
      document.getElementById("row-" + this.id)?.remove();
      this.dialogRef.close()
    });

  };
}
