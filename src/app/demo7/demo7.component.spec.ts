/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Demo7Component } from './demo7.component';

describe('Demo7Component', () => {
  let component: Demo7Component;
  let fixture: ComponentFixture<Demo7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
