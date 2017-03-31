const deepGet = (obj, prop) => {
  const splitted = Array.isArray(prop) ? prop : prop.split('.');
  let lastProp = splitted.shift();
  let lastObj = obj;

  splitted.every((item) => {
    lastObj = lastObj ? lastObj[lastProp] : null;
    lastProp = item;
    return !!lastObj;
  });
  return (lastObj && lastObj.hasOwnProperty(lastProp)) ? lastObj[lastProp] : undefined;
};

export default deepGet;
