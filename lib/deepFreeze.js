const shouldBeFrozen = obj =>
  obj !== null &&
  obj !== undefined &&
  typeof obj === 'object' &&
  !Object.isFrozen(obj);

const freezeArray = (arr, next) =>
  Object.freeze(arr.map(next));

const freezeObject = (obj, next) =>
  Object.freeze(
    Object.keys(obj)
      .reduce((aggregate, key) => Object.assign(aggregate, {
        [key]: next(obj[key])
      }), {})
  );

export const recursiveFreeze = (obj) => {
  if (!shouldBeFrozen(obj)) return obj;
  return Array.isArray(obj) ?
    freezeArray(obj, recursiveFreeze) :
    freezeObject(obj, recursiveFreeze);
};

const freeze = obj => recursiveFreeze(obj);

export default freeze;
