import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { DataService } from '../data.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let mockDataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    mockDataService = TestBed.createComponent(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call mdfLogin', () => {
    const mockdata = { emailId: 'sam@gmail.com', password: '12345678MM', firstname: 'Sam', lastname: 'Kelvin'};
    spyOn(component,'add').and.callThrough();
    component.mdfLogin(mockdata);
    expect(component.mdfLogin(mockdata)).toHaveBeenCalled();
  });

  it('should call onSavePasswordChanged', () => {
    const mockvalue = true;
    component.onSavePasswordChanged(mockvalue);
    component.loggedInForm = {password: '12345678MM'};
    expect(component.paswd).toBeTruthy();
  });

  it('should call add', () => {
    component.isModify = false;
    const mockdata = { emailId: 'sam@gmail.com', password: '12345678MM', firstname: 'Sam', lastname: 'Kelvin'};
    const mockResponse = { EmailId: 'sam@gmail.com', Password: '12345678MM', FirstName: 'Sam', LastName: 'Kelvin'};
    spyOn(mockDataService,'getUser').and.return(mockResponse);
    component.add(mockdata);
    component.loggedInForm = {password: '12345678MM'};
    expect(component.add(mockdata)).toHaveBeenCalled();
  });

  it('should call get', () => {
    component.isModify = false;
    const mockdata = { emailId: 'sam@gmail.com', password: '12345678MM', firstname: 'Sam', lastname: 'Kelvin'};
    const mockResponse = { EmailId: 'sam@gmail.com', Password: '12345678MM', FirstName: 'Sam', LastName: 'Kelvin'};
    spyOn(mockDataService,'getUser').and.return(mockResponse);
    spyOn(component,'add').and.callThrough();
    component.get(mockdata);
    expect(component.add(mockdata)).toHaveBeenCalled();
  });

  it('should call delete', () => {
    component.isModify = false;
    const mockdata = { emailId: 'sam@gmail.com', password: '12345678MM', firstname: 'Sam', lastname: 'Kelvin'};
    const mockResponse = { EmailId: 'sam@gmail.com', Password: '12345678MM', FirstName: 'Sam', LastName: 'Kelvin'};
    spyOn(mockDataService,'getUser').and.return(mockResponse);
    spyOn(mockDataService,'deleteUser').and.return(null);
    component.deleteUser(mockdata);
    expect(component.add(mockdata)).toHaveBeenCalled();
  });
});
