import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsActionComponent } from './assets-action.component';

describe('AssetsActionComponent', () => {
  let component: AssetsActionComponent;
  let fixture: ComponentFixture<AssetsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
