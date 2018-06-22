import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { UuidService } from 'angular-uuid';
import { AppComponent } from './app.component';
import { FourquadrantComponent } from './fourquadrant/fourquadrant.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import {PopupModule} from 'ng2-opd-popup';

const appRoutes: Routes = [
  { path: 'loginpage', component: FourquadrantComponent },
  { path: '',
    redirectTo: '/userpage',
    pathMatch: 'full'
  },
  { path: 'userpage', component: EmployeeComponent },
  { path: 'welcome', component: WelcomeScreenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FourquadrantComponent,
    EmployeeComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularDraggableModule,
    NgxDatatableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
