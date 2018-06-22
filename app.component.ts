import { Component, OnInit, Renderer2, ViewChild, AfterViewInit, RendererFactory2 } from '@angular/core';
import { Detail } from './detail';
import { DataService } from './data.service';
// import { UuidService } from 'angular-uuid';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
// import { Detail } from './detail';
import { DOCUMENT } from '@angular/common';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// const uuid = this.uuid.generate();
export class AppComponent implements OnInit {
  

  constructor(private dataservice: DataService) {
    // this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    
  }

  
}
