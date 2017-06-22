import { TestBed, inject } from '@angular/core/testing';

import { PlaylistParserService } from './playlist-parser.service';

describe('PlaylistParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaylistParserService]
    });
  });

  it('should be created', inject([PlaylistParserService], (service: PlaylistParserService) => {
    expect(service).toBeTruthy();
  }));
});
