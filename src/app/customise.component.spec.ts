import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomiseComponent } from './customise.component';

describe('CustomiseComponent', () => {
  let component: CustomiseComponent;
  let fixture: ComponentFixture<CustomiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
