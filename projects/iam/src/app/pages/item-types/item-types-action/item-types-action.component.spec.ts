import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypesActionComponent } from './item-types-action.component';

describe('ItemTypesActionComponent', () => {
  let component: ItemTypesActionComponent;
  let fixture: ComponentFixture<ItemTypesActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypesActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypesActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
