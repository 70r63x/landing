import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppComponent } from 'src/app/app.component';
import { FormLoginModel } from '../../models/model-forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, public dataWeb: AppComponent) { }

  ngOnInit() {
  }

  openLogin() {
    if (window.navigator.userAgent.search(/Mobi/) >= 0) {
      this.dialog.open(OpenLogin, {data: {form: this.dataWeb.getForms().login, alert: this.dataWeb.getForms().alerts}});
    }else{
      this.dialog.open(OpenLogin, {data: {form: this.dataWeb.getForms().login, alert: this.dataWeb.getForms().alerts}, width: '25%'});
    }
  }

}

@Component({//form login component****
  selector: 'loginform',
  templateUrl: 'loginform.html'
})

export class OpenLogin {

  public formlogin: FormLoginModel;
  public dataForm: any;
  public showAlert: boolean = false;
  public message: string;

  constructor(public dialogRef: MatDialogRef<OpenLogin>, @Inject(MAT_DIALOG_DATA) public data){
    this.dataForm = data;
    this.formlogin = new FormLoginModel('','');
  }

  onSubmitLogin(form: NgForm){
    if(form.valid){
      this.showAlert = true;
      this.message = this.dataForm.alert.validForm;
    }else{
      this.showAlert = true;
      this.message = this.dataForm.alert.invalidForm;
    }
  }

}
