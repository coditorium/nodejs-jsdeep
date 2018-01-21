import { deepCopy } from './index';

unitTest('deepCopy:', () => {
  it('should copy an object', () => {
    const source = { a: { b: true } };
    // when
    const copy = deepCopy(source);
    // then
    expect(copy).to.deep.equal(source);
    expect(copy).to.not.equal(source);
    expect(copy.a.b).to.deep.equal(source.a.b);
    expect(copy.a).to.not.equal(source.a);
  });

  it('should copy an array', () => {
    const source = { a: [{ b: true }] };
    // when
    const copy = deepCopy(source);
    // then
    expect(copy.a[0].b).to.deep.equal(source.a[0].b);
    expect(copy.a[0]).to.not.equal(source.a[0]);
  });

  it('should copy a date by a reference', () => {
    const source = { a: new Date() };
    // when
    const copy = deepCopy(source);
    // then
    expect(copy.a).to.equal(source.a);
  });
});
