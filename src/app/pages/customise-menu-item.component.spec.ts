import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseMenuItemComponent } from './customise-menu-item.component';

describe('CustomiseMenuItemComponent', () => {
  let component: CustomiseMenuItemComponent;
  let fixture: ComponentFixture<CustomiseMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
