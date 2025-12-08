global.setImmediate = global.setImmediate || ((fn, ...args) => global.setTimeout(fn, 0, ...args));

global.__ExpoImportMetaRegistry = {
  register: () => {},
  get: () => null,
};

global.structuredClone = global.structuredClone || ((obj) => JSON.parse(JSON.stringify(obj)));
