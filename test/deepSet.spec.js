import { deepSet } from './index';

unitTest('deepSet:', () => {
  it('should create new parent objects and copy siblings', () => {
    // given
    const obj = { a: {}, b: {} };
    // when
    const copy = deepSet(obj, 'b.c', true);
    // then
    expect(copy).to.deep.equal({ a: {}, b: { c: true } });
    expect(copy.a).to.equal(obj.a);
    expect(copy).to.not.equal(obj);
    expect(copy.b).to.not.equal(obj.b);
  });

  it('should set prop in an empty obj - array query', () => {
    // when
    const obj = deepSet({}, ['x', 'y', 'z'], 123);
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123 } } });
  });

  it('should set prop in an empty obj - string query', () => {
    // when
    const obj = deepSet({}, 'x.y.z', 123);
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123 } } });
  });

  it('should add prop in an existing subobj', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // when
    const copy = deepSet(obj, 'x.y.w', 'xyw');
    // then
    expect(copy).to.be.eql({ x: { y: { z: 123, w: 'xyw' } } });
  });

  it('should modify a prop', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // when
    const copy = deepSet(obj, 'x.y.z', 'xyz');
    // then
    expect(copy).to.be.eql({ x: { y: { z: 'xyz' } } });
  });

  it('should set an object', () => {
    // when
    const obj = deepSet({}, 'x.y', { z: 123 });
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123 } } });
  });
});
