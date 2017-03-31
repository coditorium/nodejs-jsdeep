import { deepSet } from './index';

unitTest('Deep set:', () => {
  it('should set prop in an empty obj - array query', () => {
    // given
    const obj = {};
    // when
    deepSet(obj, ['x', 'y', 'z'], 123);
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123 } } });
  });

  it('should set prop in an empty obj - string query', () => {
    // given
    const obj = {};
    // when
    deepSet(obj, 'x.y.z', 123);
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123 } } });
  });

  it('should add prop in an existing subobj', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // when
    deepSet(obj, 'x.y.w', 'xyw');
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123, w: 'xyw' } } });
  });

  it('should modify a prop', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // when
    deepSet(obj, 'x.y.z', 'xyz');
    // then
    expect(obj).to.be.eql({ x: { y: { z: 'xyz' } } });
  });

  it('should modify an array', () => {
    // given
    const obj = { x: ['a'] };
    // when
    deepSet(obj, 'x.1', 'b');
    // then
    expect(obj).to.be.eql({ x: ['a', 'b'] });
  });

  it('should set an object', () => {
    // given
    const obj = { };
    // when
    deepSet(obj, 'x.y', { z: 123 });
    // then
    expect(obj).to.be.eql({ x: { y: { z: 123 } } });
  });
});
