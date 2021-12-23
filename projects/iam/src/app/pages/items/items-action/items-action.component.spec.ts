import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsActionComponent } from './items-action.component';

describe('ItemsActionComponent', () => {
  let component: ItemsActionComponent;
  let fixture: ComponentFixture<ItemsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
