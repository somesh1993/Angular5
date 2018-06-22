import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourquadrantComponent } from './fourquadrant.component';

describe('FourquadrantComponent', () => {
  let component: FourquadrantComponent;
  let fixture: ComponentFixture<FourquadrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourquadrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourquadrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
