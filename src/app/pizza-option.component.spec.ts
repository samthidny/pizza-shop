import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOptionComponent } from './pizza-option.component';

describe('PizzaOptionComponent', () => {
  let component: PizzaOptionComponent;
  let fixture: ComponentFixture<PizzaOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
