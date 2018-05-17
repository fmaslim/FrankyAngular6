/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularRedditComponent } from './angular-reddit.component';

describe('AngularRedditComponent', () => {
  let component: AngularRedditComponent;
  let fixture: ComponentFixture<AngularRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
