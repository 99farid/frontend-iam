import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInDetailActionComponent } from './transactions-in-detail-action.component';

describe('TransactionsInDetailActionComponent', () => {
  let component: TransactionsInDetailActionComponent;
  let fixture: ComponentFixture<TransactionsInDetailActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInDetailActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInDetailActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
