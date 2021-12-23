import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOutActionComponent } from './transactions-out-action.component';

describe('TransactionsOutActionComponent', () => {
  let component: TransactionsOutActionComponent;
  let fixture: ComponentFixture<TransactionsOutActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOutActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOutActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
