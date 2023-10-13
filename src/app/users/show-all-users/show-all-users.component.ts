import { Component, OnInit } from '@angular/core';
import { InfosystemService } from '../../service/infosystem.service';


@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit{ 
  constructor( private _infoService: InfosystemService) {
   
  }
  ngOnInit(): void {
    debugger;
    this._infoService.getUsersList().subscribe({
      next: (value: any) => {
        console.log(value);
        // this._snackBar.openSnackBar("information Update!");
        // this._dialofref.close(true);
      },
      error: (err: any) => {
        // this._snackBar.openSnackBar(err);
      },
    })
  }
}
