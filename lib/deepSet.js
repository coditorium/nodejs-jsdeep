const deepSet = (obj, prop, value) => {
  const splitted = Array.isArray(prop) ? prop : prop.split('.');
  let lastProp = splitted.shift();
  let lastObj = obj;

  splitted.forEach((item) => {
    lastObj[lastProp] = lastObj.hasOwnProperty(lastProp) ? lastObj[lastProp] : {};
    lastObj = lastObj[lastProp];
    lastProp = item;
  });
  lastObj[lastProp] = value;
  return lastObj;
};

export default deepSet;
