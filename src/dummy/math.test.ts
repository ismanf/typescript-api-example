import { add, addAsync } from './math';

describe('math', () => {
  it('should add', () => {
    const result = add(2, 2);
    expect(result).toBe(4);
  });

  it('should add async', async () => {
    expect(await addAsync(2, 2)).toBe(4);
  });
});
