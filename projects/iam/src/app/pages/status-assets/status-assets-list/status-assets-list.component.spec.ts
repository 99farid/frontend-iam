import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAssetsListComponent } from './status-assets-list.component';

describe('StatusAssetsListComponent', () => {
  let component: StatusAssetsListComponent;
  let fixture: ComponentFixture<StatusAssetsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAssetsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAssetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
