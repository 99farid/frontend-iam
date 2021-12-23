import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInActionComponent } from './transactions-in-action.component';

describe('TransactionsInActionComponent', () => {
  let component: TransactionsInActionComponent;
  let fixture: ComponentFixture<TransactionsInActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
