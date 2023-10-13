import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfosystemService } from '../service/infosystem.service';
import { SnackBarService } from '../service/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  formSubmitAttempt!: boolean;

  constructor(
    private fb: FormBuilder, private _infoService: InfosystemService,private _snackBar: SnackBarService, private router: Router  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.valid && this.form.touched) ||
      (this.form.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    debugger;
    if (this.form.valid) {
      this.router.navigate(['/DataInformation']);
      this._infoService.login(this.form.value).subscribe(result => {
        if (result.successfully) {
          
        }
      });
    }
    else{
      this._snackBar.openSnackBar("Invalid Credentials", 'Error');
    }
    this.formSubmitAttempt = true;
  }
}
