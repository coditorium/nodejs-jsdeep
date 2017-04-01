import { deepFreeze } from './index';

unitTest('deepFreeze:', () => {
  it('should freeze an object', () => {
    // when
    const frozen = deepFreeze({ a: 'a' });
    // then
    expect(frozen).to.be.frozen;
  });

  it('should throw exepction on assignment', () => {
    // when
    const frozen = deepFreeze({ a: 'a' });
    // then
    expect(() => { frozen.a = 'b'; }).to.throw(/Cannot assign to read only property 'a'/);
  });

  it('should create a copy of the argument', () => {
    // given
    const passedObj = { a: 'a' };
    // when
    const frozen = deepFreeze(passedObj);
    // then
    expect(frozen).to.not.be.equal(passedObj);
  });

  it('should deeply freeze an object', () => {
    // when
    const frozen = deepFreeze({ a: { x: 'x' } });
    // then
    expect(frozen.a).to.be.frozen;
  });

  it('should freeze an array', () => {
    // when
    const frozen = deepFreeze(['a']);
    // then
    expect(frozen).to.be.frozen;
  });

  it('should deeply freeze an array', () => {
    // when
    const frozen = deepFreeze([{ a: 'a' }]);
    // then
    expect(frozen[0]).to.be.frozen;
  });

  it('should deeply freeze a complex object', () => {
    // when
    const frozen = deepFreeze({
      a: [{
        b: [
          { c: {} }
        ]
      }]
    });
    // then
    expect(frozen.a[0].b[0].c).to.be.frozen;
  });
});
