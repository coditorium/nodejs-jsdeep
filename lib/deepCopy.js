const shouldBeCopied = obj =>
  obj !== undefined &&
  obj !== null &&
  typeof obj === 'object';

const copyArray = (arr, next) => arr.map(next);

const copyObject = (obj, next) =>
  Object.keys(obj)
    .reduce((aggregate, key) => Object.assign(aggregate, {
      [key]: next(obj[key])
    }), {});

const recursiveCopy = (obj) => {
  if (!shouldBeCopied(obj)) return obj;
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  return Array.isArray(obj) ?
    copyArray(obj, recursiveCopy) :
    copyObject(obj, recursiveCopy);
};

const deepCopy = obj => recursiveCopy(obj);

export default deepCopy;
