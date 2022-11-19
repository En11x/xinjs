import { describe, expect, it } from 'vitest';
import { move } from '.';

describe('array move', () => {
  it('works', () => {
    expect(move([1, 2, 3, 4], 0, 1)).toEqual([2, 1, 3, 4]);
  });
});
