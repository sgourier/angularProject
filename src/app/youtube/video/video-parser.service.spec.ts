import { TestBed, inject } from '@angular/core/testing';

import { VideoParserService } from './video-parser.service';

describe('VideoParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoParserService]
    });
  });

  it('should be created', inject([VideoParserService], (service: VideoParserService) => {
    expect(service).toBeTruthy();
  }));
});
