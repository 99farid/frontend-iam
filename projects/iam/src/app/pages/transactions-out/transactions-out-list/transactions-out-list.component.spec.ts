import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsOutListComponent } from './transactions-out-list.component';

describe('TransactionsOutListComponent', () => {
  let component: TransactionsOutListComponent;
  let fixture: ComponentFixture<TransactionsOutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsOutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsOutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
