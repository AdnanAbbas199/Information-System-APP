import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfosystemService } from '../service/infosystem.service';
import { SnackBarService } from '../service/snack-bar.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  formSubmitAttempt!: boolean;

  constructor(
    private fb: FormBuilder, private _infoService: InfosystemService,private _snackBar: SnackBarService, private router: Router ,private authService :AuthService ) { }

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
      // this._infoService.changeName(true);
      // if(this.form.value['userName']=="admin"){
      // this._infoService.changeroletoAdmin(true);
      // }else {
      //   this._infoService.changeroletoAdmin(false);
      // }

      this.authService.login(this.form.value);

     
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
