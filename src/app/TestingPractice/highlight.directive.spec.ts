import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p appHighlight="red">Highlight me!</p>
  `
})
class TestComponent{}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges(); 
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(fixture.debugElement.nativeElement);
    expect(directive).toBeTruthy();
  });

  it('should highlight the background on mouse enter', () => {
    const debugElement = fixture.debugElement.query(By.css('p'));
    const p: HTMLElement = debugElement.nativeElement;

    debugElement.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(p.style.backgroundColor).toBe('red');
  });

  it('should remove the background on mouse leave', () => {
    const debugElement = fixture.debugElement.query(By.css('p'));
    const p: HTMLElement = debugElement.nativeElement;

    debugElement.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(p.style.backgroundColor).toBe('');
  });
});
