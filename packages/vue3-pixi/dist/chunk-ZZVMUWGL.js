var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/compiler.ts
var elementNames = [
  "container",
  "sprite",
  "graphics",
  "text",
  "bitmap-text",
  "tiling-sprite",
  "animated-sprite",
  "mesh",
  "simple-plane",
  "nine-slice-plane",
  "simple-rope",
  "filter",
  "blur-filter",
  "alpha-filter",
  "displacement-filter",
  "color-matrix-filter",
  "f-x-a-a-filter"
];
var prefix = "pixi-";
function isCustomElement(name) {
  let normalizedName = name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  if (normalizedName.startsWith("-"))
    normalizedName = normalizedName.slice(1);
  const isPixiElement = elementNames.includes(normalizedName);
  const isPrefixElement = normalizedName.startsWith(prefix) && elementNames.includes(normalizedName.slice(prefix.length));
  return isPixiElement || isPrefixElement;
}
var compilerOptions = {
  isCustomElement
};
var transformAssetUrls = {
  sprite: ["texture"]
};

export {
  __publicField,
  isCustomElement,
  compilerOptions,
  transformAssetUrls
};
