/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPlaylistService } from './UserPlaylist.service';

describe('Service: UserPlaylist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPlaylistService]
    });
  });

  it('should ...', inject([UserPlaylistService], (service: UserPlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
