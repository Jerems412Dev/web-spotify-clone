/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotifyPlaylistService } from './SpotifyPlaylist.service';

describe('Service: SpotifyPlaylist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyPlaylistService]
    });
  });

  it('should ...', inject([SpotifyPlaylistService], (service: SpotifyPlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
