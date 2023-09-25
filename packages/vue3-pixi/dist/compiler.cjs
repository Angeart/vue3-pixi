"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/compiler.ts
var compiler_exports = {};
__export(compiler_exports, {
  compilerOptions: () => compilerOptions,
  isCustomElement: () => isCustomElement,
  transformAssetUrls: () => transformAssetUrls
});
module.exports = __toCommonJS(compiler_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compilerOptions,
  isCustomElement,
  transformAssetUrls
});
