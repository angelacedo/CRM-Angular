import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/modals/adduser/adduser.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { DeleteuserComponent } from './components/modals/deleteuser/deleteuser.component';
import { ModifyuserComponent } from './components/modals/modifyuser/modifyuser.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UsersManageComponent } from './components/users-manage/users-manage.component';
import { HomeComponent } from './components/views/home/home.component';
import { UsersComponent } from './components/views/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LeftbarComponent,
    DashboardComponent,
    HomeComponent,
    UsersComponent,
    UsersManageComponent,
    DeleteuserComponent,
    ModifyuserComponent,
    AddUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []

})
export class AppModule
{


}
