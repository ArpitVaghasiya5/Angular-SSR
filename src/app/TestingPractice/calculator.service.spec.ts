import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
   let service: CalculatorService;
   let logger : jasmine.SpyObj<LoggerService>; 
  beforeEach(() => {
    logger = jasmine.createSpyObj("LoggerService", ["log"])
    // service = new CalculatorService(logger)
    TestBed.configureTestingModule({
      providers : [
        CalculatorService,
        {provide:LoggerService, useValue:logger}
      ]
    });
    service = TestBed.inject(CalculatorService);
    logger =TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>
  });

  it('Add', () => {
    
    const calc = service.add(2, 8);
    expect(calc).toBe(10);
    expect(logger.log).toHaveBeenCalledTimes(1);
    // expect(service).toBeTruthy();
  });

  it('Multiply', () => {
    const calc = service.multiply(2, 8);
    expect(calc).toBe(16);
    expect(logger.log).toHaveBeenCalledTimes(1);
    // expect(service).toBeTruthy();
  });
});
