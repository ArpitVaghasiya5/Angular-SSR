import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(LoggerService);
  // });

  it('should be Log message', () => {
    spyOn(console, 'log');
    const message = "Angular unit testing";
    const logger = new LoggerService();
    logger.log(message)
    expect(console.log).withContext("Should have been callled once").toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`LOGGER LOG:${message}`)
  });
});
