import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAssetsActionComponent } from './status-assets-action.component';

describe('StatusAssetsActionComponent', () => {
  let component: StatusAssetsActionComponent;
  let fixture: ComponentFixture<StatusAssetsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAssetsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAssetsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
