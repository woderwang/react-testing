import sum from '../src/utils/sum';

test('test sum', () => {
    expect(sum(1, 1)).toBe(2);
});

test('test promise', async () => {
    let result = await new Promise((resolve) => { resolve(sum(2, 2)) });
    expect(result).toBe(4);
});