import { DemoPipe } from './demo.pipe';

describe('DemoPipe', () => {
  let pipe: DemoPipe;


  beforeEach(() => {
    pipe = new DemoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform the input to uppercase', () => {
    const input = 'hello world';
    const output = pipe.transform(input);
    expect(output).toBe('HELLO WORLD');
  });

  // it('should transform empty string to empty string', () => {
  //   const input = '';
  //   const output = pipe.transform(input);
  //   expect(output).toBe('');
  // });
});
