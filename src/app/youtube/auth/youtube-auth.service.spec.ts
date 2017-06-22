import { TestBed, inject } from '@angular/core/testing';

import { YoutubeAuthService } from './youtube-auth.service';

describe('YoutubeAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeAuthService]
    });
  });

  it('should be created', inject([YoutubeAuthService], (service: YoutubeAuthService) => {
    expect(service).toBeTruthy();
  }));
});
