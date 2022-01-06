import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsExpiredComponent } from './transactions-expired.component';

describe('TransactionsExpiredComponent', () => {
  let component: TransactionsExpiredComponent;
  let fixture: ComponentFixture<TransactionsExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
