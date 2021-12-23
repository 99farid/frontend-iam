import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAssetsListComponent } from './condition-assets-list.component';

describe('ConditionAssetsListComponent', () => {
  let component: ConditionAssetsListComponent;
  let fixture: ComponentFixture<ConditionAssetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionAssetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionAssetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
