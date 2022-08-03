import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService
{


  constructor(private httpClient: HttpClient)
  {

  }

  getAllUsers = () =>
  {
    return this.httpClient.get('http://localhost:3000/users/getusers');
  };
  getUserById = (id: String) =>
  {
    return this.httpClient.post('http://localhost:3000/users/getuser', { id });
  };

  getNumberOfUsers = () =>
  {
    return this.httpClient.get('http://localhost:3000/users/getnumberofusers');
  };

  getNumberOfUsersToday = () =>
  {
    return this.httpClient.get('http://localhost:3000/users/getnumberofuserstoday');
  };
  getFilteredUsers = (params: any) =>
  {
    return this.httpClient.post('http://localhost:3000/users/filteredusers', params);
  };
  deleteUser = (id: String) =>
  {

    return this.httpClient.post('http://localhost:3000/users/deleteuser', { id });
  };
  updateUser = (user: Object) =>
  {
    return this.httpClient.post('http://localhost:3000/users/updateuser', user);
  };

  addUser = (user: Object) =>
  {
    return this.httpClient.post('http://localhost:3000/users/adduser', user);
  };
}
