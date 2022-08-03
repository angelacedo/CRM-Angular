import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConnectionService } from './../../services/connection/connection.service';
import { AddmodalService } from './../../services/modals/addmodal/addmodal.service';
import { DeletemodalService } from './../../services/modals/delmodal/deletemodal.service';
import { ModifymodalService } from './../../services/modals/modifymodal/modifymodal.service';
import { ReloadComponentService } from './../../services/reload-component.service';


@Component({
  selector: 'app-users-manage',
  templateUrl: './users-manage.component.html',
  styleUrls: ['./users-manage.component.css']
})
export class UsersManageComponent
{

  public users: any;
  public error: any = null;
  constructor(private connectionService: ConnectionService, private deleteModalService: DeletemodalService, private modifyModalService: ModifymodalService, private addModalService: AddmodalService, private reloadComponentService: ReloadComponentService)
  {
  }
  ngOnInit()
  {
    this.getAllUsers();
    this.reloadWhenAddUser(); //Reload when a user is added

  }

  getAllUsers = () =>
  {
    this.connectionService.getAllUsers().subscribe((data) =>
    {
      this.users = data;
    });

  };

  getUserById = (id: String) =>
  {

    var promise = new Promise((resolve: any, reject: any) =>
    {

      this.connectionService.getUserById(id).subscribe({
        next: data =>
        {
          resolve(data);

        },
        error: error =>
        {
          reject(error);
        }
      });

    });

    return promise;

  };
  openDeleteUserModal = (id: String) =>
  {
    this.deleteModalService.openDeleteUserModal(id);
  };
  openAddUserModal = () =>
  {
    this.addModalService.openAddUserModal();
  };
  openModifyUserModal = (id: String) =>
  {

    this.getUserById(id).then((data) =>
    {
      /*If u click a lot of times the modify button, the server will return an error because it has not finished the previous request. When it occurs, the data variable is undefined.

        To prevent this, when data == undefined, we dont want to show the modify dialog  */
      if (data != undefined)
      {

        this.modifyModalService.openModifyUserDialog(data as Object); // Cast data, which is unknown, to an Object
      }

    });


  };

  reloadWhenAddUser = () =>
  {
    this.reloadComponentService.getUpdate().subscribe(message =>
    { //message contains the data sent from service
      if (message.text == "updateUserManagerComponent")
      {
        this.getAllUsers();
      }

    });
  };

  userSearch = (f: NgForm) =>
  {
    if (f.valid && (f.value.selectFilter === "ID" || f.value.selectFilter === "Full Name" || f.value.selectFilter === "Occupation"))
    {
      this.connectionService.getFilteredUsers(f.value).subscribe((data: any) =>
      {
        if(data.error){
          this.users = null
          this.error = data.error;
        }else{
          this.error = null;
          this.users = data
        }

      });

    }
  };

}
