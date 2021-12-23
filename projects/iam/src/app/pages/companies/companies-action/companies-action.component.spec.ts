import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesActionComponent } from './companies-action.component';

describe('CompaniesActionComponent', () => {
  let component: CompaniesActionComponent;
  let fixture: ComponentFixture<CompaniesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
