type Obj = Record<string | number | symbol, unknown>;
function isObject(value: unknown): value is Obj {
  return value instanceof Object && value.constructor === Object;
}
function merge(target: Obj, source?: Obj): Obj {
  if (source) {
    for (const [key, value2] of Object.entries(source)) {
      if (value2 !== undefined) {
        const value1 = target[key];
        if (value1 === undefined) {
          // redundant to last else case but may be faster
          target[key] = value2;
        } else if (Array.isArray(value1) && Array.isArray(value2)) {
          target[key] = value1.concat(value2);
        } else if (isObject(value1) && isObject(value2)) {
          target[key] = merge(value1, value2);
        } else {
          target[key] = value2;
        }
      }
    }
  }
  return target;
}

export default merge;
