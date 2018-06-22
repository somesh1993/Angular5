import { Component, OnInit, Renderer2, ViewChild, AfterViewInit, RendererFactory2 } from '@angular/core';
import { Detail } from '../detail';
import { DataService } from '../data.service';
// import { UuidService } from 'angular-uuid';
import {RouterModule, Routes} from '@angular/router';
// import { Detail } from './detail';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  date: Date;
  loggedInForm;
  emailId: string;
  password: string;
  firstname: string;
  lastname: string;
  rEmail: string;
  rPassword: string;
  rFirstname: string;
  rLastname: string;
  isModify: boolean;
  paswd = '12345678';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$';
  Users: Array<Detail> = new Array<Detail>();

  constructor(private dataservice: DataService) {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.date = new Date();
    this.isModify = false;
    this.loggedInForm = new FormGroup({
      emailId: new FormControl('nigamsomesh1993@gmail.com', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])),
      password: new FormControl('Password!123', [
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.required,
        // Validators.pattern("^[^A-Za-z0-9]*")
        ]),
      firstname: new FormControl('Somesh', [
        Validators.maxLength(20),
        Validators.required]),
      lastname: new FormControl('Nigam', [
        Validators.maxLength(20),
        Validators.required]),
     });
  }

  mdfLogin(data) {
    this.emailId = data.emailId;
    this.password = data.password;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.add(data);
  }

  onSavePasswordChanged(value: boolean) {
    if (value) {
    this.paswd = this.loggedInForm.password;
    }
    // console.log(this.paswd);
  }

  add(data) {
      if (!this.isModify) {
        this.dataservice.getUser(data)
        .subscribe(response => {
        if (response.EmailId == data.emailId && response.Password == data.password) {
          alert("User For This EmailId already Exists");
        } else{
        this.dataservice.addUser(data)
        .subscribe(data => {
          this.Users.push(data);
          alert("User has been Added");
      });
        }
      });
      }
       else {
        this.dataservice.modifyUser(data)
        .subscribe(data => {
          this.Users.push(data);
          alert("User has been Modified");
      });
      }
      // console.log(this.Users);
  }

  get(data) {
      
      this.dataservice.getUser(data)
      .subscribe(response => {
        this.rEmail = response.EmailId;
        this.rPassword = response.Password;
        this.rFirstname = response.FirstName;
        this.rLastname = response.LastName;
        // this.Users.pop();
        if (this.rEmail == data.emailId && this.rPassword == data.password) {
        this.isModify = true;
        this.mdfLogin(this.loggedInForm.value);
        } else{
          alert("Enter Correct Details to Modify");
        }
      });
  }

  delete(data) {
    this.dataservice.getUser(data)
      .subscribe(response => {
        // this.rEmail = response.EmailId;
        // this.rPassword = response.Password;
        // this.Users.pop();
        if (response.EmailId == data.emailId && response.Password == data.password) {
          this.dataservice.deleteUser(data)
          .subscribe(response => {
          alert("User has been Deleted");
        });
        } else{
          alert("Enter Correct Details to Delete");
        }
      });
  }


}
