import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InfosystemService } from '../service/infosystem.service';
import { SnackBarService } from '../service/snack-bar.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-add-edit',
  templateUrl: './info-add-edit.component.html',
  styleUrls: ['./info-add-edit.component.css']
})
export class InfoAddEditComponent implements OnInit {
  infoform: FormGroup;
  educationList: string[] = ['Metric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];
  constructor(private _fromBuilder: FormBuilder, private _infoService: InfosystemService, private _dialofref: MatDialogRef<InfoAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBar: SnackBarService) {
    this.infoform = this._fromBuilder.group({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      cnic: '',
      dob: '',
      gender: '',
      experience: '',
      education: ''
    });
  }
  ngOnInit(): void {
    debugger;
    this.infoform.patchValue(this.data);
  }
  formSubmit() {
    if (this.infoform.valid) {
      if (this.data) {
        this._infoService.updateInfo(this.data.id, this.infoform.value).subscribe({
          next: (value: any) => {
            this._snackBar.openSnackBar("information Update!");
            this._dialofref.close(true);
          },
          error: (err: any) => {
            this._snackBar.openSnackBar(err);
          },
        })
      } else {
        this._infoService.addInfo(this.infoform.value).subscribe({
          next: (value: any) => {
            this._snackBar.openSnackBar("information add successfully...");
            this._dialofref.close(true);
          },
          error: (err: any) => {
            this._snackBar.openSnackBar(err);
          },
        })
      }
    }
  }
}
