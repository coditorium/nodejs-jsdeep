import { deepExists } from './index';

unitTest('Deep exists:', () => {
  it('should confirm existsence of embedded property', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepExists(obj, 'x.y.z')).to.be.true;
  });

  it('should confirm existsence o embedded property - query with array', () => {
    // given
    const obj = { x: { y: { z: 123 } } };
    // then
    expect(deepExists(obj, ['x', 'y', 'z'])).to.be.true;
  });

  it('should confirm an array item', () => {
    // given
    const obj = { x: ['a', 'b'] };
    // then
    expect(deepExists(obj, 'x.1')).to.be.true;
  });

  it('should decline an array item', () => {
    // given
    const obj = { x: ['a', 'b'] };
    // then
    expect(deepExists(obj, 'x.3')).to.be.false;
  });

  it('should decline existence of a property', () => {
    // given
    const obj = { };
    // then
    expect(deepExists(obj, 'x.y.z')).to.be.false;
  });
});
