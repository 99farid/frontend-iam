import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsActionComponent } from './locations-action.component';

describe('LocationsActionComponent', () => {
  let component: LocationsActionComponent;
  let fixture: ComponentFixture<LocationsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
