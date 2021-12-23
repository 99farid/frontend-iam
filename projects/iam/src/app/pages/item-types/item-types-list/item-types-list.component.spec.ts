import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypesListComponent } from './item-types-list.component';

describe('ItemTypesListComponent', () => {
  let component: ItemTypesListComponent;
  let fixture: ComponentFixture<ItemTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
