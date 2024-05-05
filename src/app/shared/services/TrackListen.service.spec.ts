/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrackListenService } from './TrackListen.service';

describe('Service: TrackListen', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackListenService]
    });
  });

  it('should ...', inject([TrackListenService], (service: TrackListenService) => {
    expect(service).toBeTruthy();
  }));
});
