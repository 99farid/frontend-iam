import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesActionComponent } from './employees-action.component';

describe('EmployeesActionComponent', () => {
  let component: EmployeesActionComponent;
  let fixture: ComponentFixture<EmployeesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
