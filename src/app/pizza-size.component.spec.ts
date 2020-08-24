import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSizeComponent } from './pizza-size.component';

describe('PizzaSizeComponent', () => {
  let component: PizzaSizeComponent;
  let fixture: ComponentFixture<PizzaSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
