import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phone', 'email', 'cnic', 'dob', 'gender', 'experience', 'education', 'action'];
  dataSource!: MatTableDataSource<any>;
  title: any;

  constructor(private  authService:AuthService ) { 
  
  }
 
  
  logout(){
    this.authService.logout();
  }
}
