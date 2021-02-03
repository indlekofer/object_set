const setIn = (obj, path, value) => {
  if (path.length == 0 || typeof path.splice == 'undefined' || typeof path[0] == 'undefined') {
    return value;
  }
  let key = path.splice(0, 1);
  if (key.includes('__proto__') || key.includes('constructor') || key.includes('prototype')) {
    return obj;
  }

  if (typeof obj[key] == 'undefined') obj[key] = {};

  obj[key] = setIn(obj[key], path, value);

  return obj;
};

export default setIn;
