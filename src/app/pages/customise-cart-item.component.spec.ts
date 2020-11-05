import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseCartItemComponent } from './customise-cart-item.component';

describe('CustomiseCartItemComponent', () => {
  let component: CustomiseCartItemComponent;
  let fixture: ComponentFixture<CustomiseCartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseCartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
