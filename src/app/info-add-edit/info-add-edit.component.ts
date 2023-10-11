import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InfosystemService } from '../service/infosystem.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-add-edit',
  templateUrl: './info-add-edit.component.html',
  styleUrls: ['./info-add-edit.component.css']
})
export class InfoAddEditComponent {
  infoform: FormGroup;
  educationList: string[] = ['Metric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate'];
  constructor(private _fromBuilder: FormBuilder,private _infoService:InfosystemService,private _dialofref:MatDialogRef<InfoAddEditComponent>) {
    this.infoform = this._fromBuilder.group({
      firstName: '',
      lastName: '',
      phone: '',
      email:'',
      cnic:'',
      dob:'',
      gender:'',
      experience:'',
      education:''
    });
  }

  formSubmit(){
    if(this.infoform.valid){
      console.log(this.infoform.value);
      debugger;
      this._infoService.addInfo(this.infoform.value).subscribe({
        next:(value: any) =>{
          alert("information add successfully...");
          this._dialofref.close(true);
        },
        error:(err: any) =>{
          alert(err);
        },
      })
    }
  }
}
