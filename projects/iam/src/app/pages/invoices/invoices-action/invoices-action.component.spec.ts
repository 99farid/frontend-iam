import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesActionComponent } from './invoices-action.component';

describe('InvoicesActionComponent', () => {
  let component: InvoicesActionComponent;
  let fixture: ComponentFixture<InvoicesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
