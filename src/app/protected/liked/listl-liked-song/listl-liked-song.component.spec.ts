/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListlLikedSongComponent } from './listl-liked-song.component';

describe('ListlLikedSongComponent', () => {
  let component: ListlLikedSongComponent;
  let fixture: ComponentFixture<ListlLikedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlLikedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlLikedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
