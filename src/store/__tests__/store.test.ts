import counterSlice from 'store/slices';

describe('Store: Counter', () => {
  it('should return the initial state', () => {
    expect(counterSlice.reducer(undefined, { type: undefined })).toEqual({
      value: 0,
    });
  });

  it('should increment when the reducer is called', () => {
    expect(
      counterSlice.reducer({ value: 0 }, { type: 'counter/increment' })
    ).toEqual({
      value: 1,
    });
  });
});
