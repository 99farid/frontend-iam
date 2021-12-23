import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsInListComponent } from './transactions-in-list.component';

describe('TransactionsInListComponent', () => {
  let component: TransactionsInListComponent;
  let fixture: ComponentFixture<TransactionsInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsInListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
