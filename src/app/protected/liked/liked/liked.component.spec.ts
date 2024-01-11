/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LikedComponent } from './liked.component';

describe('LikedComponent', () => {
  let component: LikedComponent;
  let fixture: ComponentFixture<LikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
