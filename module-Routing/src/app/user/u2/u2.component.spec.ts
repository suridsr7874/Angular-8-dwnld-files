import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U2Component } from './u2.component';

describe('U2Component', () => {
  let component: U2Component;
  let fixture: ComponentFixture<U2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
