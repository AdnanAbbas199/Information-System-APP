import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInformationComponent } from './data-information/data-information.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'DataInformation',component:DataInformationComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
