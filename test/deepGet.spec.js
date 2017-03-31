import { deepGet } from './index';

unitTest('Deep get:', () => {
  it('should get a prop - string query', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepGet(obj, 'x.y.z')).to.be.equal(obj.x.y.z);
  });

  it('should get a prop - array query', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepGet(obj, ['x', 'y', 'z'])).to.be.equal(obj.x.y.z);
  });

  it('should get the second element from an array', () => {
    // given
    const obj = { x: ['a', 'b', 'c'] };
    expect(deepGet(obj, 'x.2')).to.be.equal(obj.x[2]);
  });

  it('should return undefined on non existing propery', () => {
    // given
    const obj = { };
    // then
    expect(deepGet(obj, 'x.y.z')).to.be.equal(undefined);
  });
});
