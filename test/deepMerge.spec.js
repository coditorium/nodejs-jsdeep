import { deepMerge } from './index';

unitTest('deepMerge:', () => {
  it('should create new parent objects and copy siblings', () => {
    // given
    const obj = { a: {}, b: {} };
    // when
    const copy = deepMerge(obj, { b: { c: true } });
    // then
    expect(copy).to.deep.equal({ a: {}, b: { c: true } });
    expect(copy.a).to.equal(obj.a);
    expect(copy).to.not.equal(obj);
    expect(copy.b).to.not.equal(obj.b);
  });

  it('should bot change arguments', () => {
    // given
    const a = { x: true };
    const b = { x: false };
    // when
    deepMerge(a, b);
    // then
    expect(a).to.deep.equal({ x: true });
    expect(b).to.deep.equal({ x: false });
  });

  it('should merge multiple objects', () => {
    // when
    const copy = deepMerge({ a: true }, { b: true }, { c: true });
    // then
    expect(copy).to.deep.equal({ a: true, b: true, c: true });
  });

  it('should not merge arrays', () => {
    // when
    const copy = deepMerge({ a: ['x', 'y'] }, { a: ['z'] });
    // then
    expect(copy).to.deep.equal({ a: ['z'] });
  });

  it('should not merge dates', () => {
    // when
    const copy = deepMerge({ a: new Date() }, { a: { b: true } });
    // then
    expect(copy).to.deep.equal({ a: { b: true } });
  });

  it('should merge objects deeply', () => {
    // when
    const copy = deepMerge({ a: { b: { c: true } } }, { a: { b: { d: true } } });
    // then
    expect(copy).to.deep.equal({ a: { b: { c: true, d: true } } });
  });

  it('should copy property from the first object if property is undefined in the second one', () => {
    // when
    const copy = deepMerge({ a: true }, { a: undefined });
    // then
    expect(copy).to.deep.equal({ a: true });
  });

  it('should copy property from the first object if property is null in the second one', () => {
    // when
    const copy = deepMerge({ a: true }, { a: null });
    // then
    expect(copy).to.deep.equal({ a: true });
  });

  it('should not copy property from the first object if property is false in the second one', () => {
    // when
    const copy = deepMerge({ a: true }, { a: false });
    // then
    expect(copy).to.deep.equal({ a: false });
  });
});
