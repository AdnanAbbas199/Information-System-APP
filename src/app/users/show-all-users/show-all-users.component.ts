import { Component, OnInit } from '@angular/core';
import { InfosystemService } from '../../service/infosystem.service';
import { CommonClasses } from 'src/app/shared/common-classes.model';


@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit{
  
  list:CommonClasses[] = []
  constructor( private _infoService: InfosystemService) {
   
  }
  ngOnInit(): void {
    debugger;
    this._infoService.getUsersList().subscribe({
      next: (value: any) => {
        this.list = value  as CommonClasses[]
        
        // this._snackBar.openSnackBar("information Update!");
        // this._dialofref.close(true);
      },
      error: (err: any) => {
        // this._snackBar.openSnackBar(err);
      },
    })
  }
}
