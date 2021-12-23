import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAssetsActionComponent } from './condition-assets-action.component';

describe('ConditionAssetsActionComponent', () => {
  let component: ConditionAssetsActionComponent;
  let fixture: ComponentFixture<ConditionAssetsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionAssetsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionAssetsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
