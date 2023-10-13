import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInformationComponent } from './data-information/data-information.component';

const routes: Routes = [
  {path:'DataInformation',component:DataInformationComponent}
  // {path:'',component:DataInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
