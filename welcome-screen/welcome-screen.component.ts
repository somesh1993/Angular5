import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  rows;
  columns;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.get();
  }
  
  get() {
      this.dataservice.getAllUsers()
      .subscribe(response => {
        console.log(response.length);
        this.rows = response;
        this.columns = [
          {prop: 'FirstName'},
          {prop: 'LastName'},
          {prop: 'EmailId'}
        ];
      });
  }
}
