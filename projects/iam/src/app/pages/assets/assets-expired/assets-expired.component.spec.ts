import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsExpiredComponent } from './assets-expired.component';

describe('AssetsExpiredComponent', () => {
  let component: AssetsExpiredComponent;
  let fixture: ComponentFixture<AssetsExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
