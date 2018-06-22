import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Detail } from '../detail';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fourquadrant',
  templateUrl: './fourquadrant.component.html',
  styleUrls: ['./fourquadrant.component.css']
})
export class FourquadrantComponent implements OnInit {

  date: Date;
  loggedInsideForm;
  emailId: string;
  password: string;
  firstname: string;
  lastname: string;
  rEmail: string;
  rPassword: string;
  rFirstname: string;
  rLastname: string;
  isUser: boolean;
  paswd="12345678";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$";
  Users: Array<Detail> = new Array<Detail>();

  constructor(private dataservice: DataService) {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.date = new Date();
    this.loggedInsideForm = new FormGroup({
      emailId: new FormControl("nigamsomesh1993@gmail.com", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl('Password!123',[
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.required
        // Validators.pattern("^[^A-Za-z0-9]*")
        ])
     })
  }

  Login(data) {
    this.emailId = data.emailId;
    this.password = data.password;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.get(data);
  }

  get(data) {
      
      this.dataservice.getUser(data)
      .subscribe(response => {
        this.rEmail = response.EmailId;
        this.rPassword = response.Password;
        this.rFirstname = response.FirstName;
        this.rLastname = response.LastName;
        this.Users.pop();
        if(this.rEmail == data.emailId && this.rPassword == data.password) {
          this.isUser = true;
        } else{
          alert("Enter Correct Details to Login");
        }
      });
  }

}
