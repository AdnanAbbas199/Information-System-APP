import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInformationComponent } from './data-information/data-information.component';
import { LoginComponent } from './login/login.component';
import { AddEditUserComponent } from './users/add-edit-user/add-edit-user.component';
import { ShowAllUsersComponent } from './users/show-all-users/show-all-users.component';
import { UsersComponent } from './users/users.component';
import { authGuard } from './shared/auth.guard';
import { config } from 'rxjs';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'DataInformation',component:DataInformationComponent,canActivate:[authGuard]},
  {path:'Signup',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
