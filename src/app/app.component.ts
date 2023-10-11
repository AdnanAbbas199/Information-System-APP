import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoAddEditComponent } from './info-add-edit/info-add-edit.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Information-system';

  constructor (private _dialog:MatDialog){}

  openAddEditInfoForm(){
    this._dialog.open(InfoAddEditComponent);
  }
}
