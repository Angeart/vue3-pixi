"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Application: () => Application,
  EasePresets: () => EasePresets,
  External: () => External,
  Loader: () => Loader,
  PTransition: () => PTransition,
  PTransitionGroup: () => PTransitionGroup,
  PixiTransition: () => PTransition,
  PixiTransitionGroup: () => PTransitionGroup,
  appInjectKey: () => appInjectKey,
  callInstanceSetter: () => callInstanceSetter,
  compilerOptions: () => compilerOptions,
  createApp: () => createApp,
  createRenderer: () => createRenderer,
  isCustomElement: () => isCustomElement,
  isOn: () => isOn,
  loaderProps: () => loaderProps,
  nodeOps: () => nodeOps,
  normalizeTexture: () => normalizeTexture,
  onReady: () => onReady,
  onTick: () => onTick,
  patchProp: () => patchProp,
  render: () => render,
  renderer: () => renderer,
  setObjectProperty: () => setObjectProperty,
  setPointProperty: () => setPointProperty,
  setPropertyValue: () => setPropertyValue,
  setSkipFirstValue: () => setSkipFirstValue,
  setTextureOptions: () => setTextureOptions,
  transformAssetUrls: () => transformAssetUrls,
  useApplication: () => useApplication,
  useRenderer: () => useRenderer,
  useScreen: () => useScreen,
  useStage: () => useStage,
  useTrack: () => useTrack
});
module.exports = __toCommonJS(src_exports);

// src/components/application/index.ts
var import_vue_demi12 = require("vue-demi");
var import_utils6 = require("@antfu/utils");
var import_pixi7 = require("pixi.js");

// src/renderer/renderer.ts
var import_vue_demi5 = require("vue-demi");

// src/renderer/patchProp.ts
var import_vue_demi3 = require("vue-demi");
var import_utils3 = require("@antfu/utils");

// src/renderer/utils/index.ts
var import_pixi = require("pixi.js");
function setTextureOptions(texture, options = {}) {
  for (const key in options)
    texture.baseTexture[key] = options[key];
}
function normalizeTexture(value) {
  if (typeof value === "string")
    return import_pixi.Texture.from(value);
  return value;
}
function isOn(props) {
  return Object.keys(props || {}).some((p) => p.startsWith("on"));
}

// src/renderer/internal/constants.ts
var renderers = {};

// src/renderer/internal/default-renderer.ts
var import_pixi2 = require("pixi.js");

// src/renderer/internal/setter.ts
var import_utils = require("@antfu/utils");
var import_vue_demi = require("vue-demi");
function setObjectProperty(inst, key, prevValue, nextValue) {
  const scope = (0, import_vue_demi.effectScope)();
  function update() {
    if (prevValue && nextValue !== prevValue)
      inst[`__vp_scope_${key}`]?.stop();
    for (const [setKey, value] of Object.entries(nextValue))
      inst[key][setKey] = value;
  }
  scope.run(() => {
    (0, import_vue_demi.watchEffect)(update);
    (0, import_vue_demi.nextTick)(update);
  });
  inst.on?.("destroyed", () => scope.stop());
  inst[`__vp_scope_${key}`] = scope;
  return true;
}
function setPointProperty(inst, name, key, prevValue, nextValue) {
  switch (key) {
    case name:
      if ((0, import_utils.isObject)(nextValue))
        return setObjectProperty(inst, name, prevValue, nextValue);
      else
        return callInstanceSetter(inst, name, nextValue);
    case `${name}X`:
      return setPropertyValue(inst[name], "x", () => inst[name].x = nextValue);
    case `${name}Y`:
      return setPropertyValue(inst[name], "y", () => inst[name].y = nextValue);
  }
  return false;
}
function setPropertyValue(inst, key, setter) {
  const initKey = `_vp_initkey_${key}`;
  function update() {
    setter();
  }
  if (!inst[initKey]) {
    Reflect.set(inst, initKey, true);
    (0, import_vue_demi.nextTick)(update);
  } else {
    update();
  }
  return true;
}
function callInstanceSetter(inst, key, value) {
  const [v1, v2, v3] = Array.isArray(value) ? value : [value, value, value];
  setPropertyValue(inst[key], key, () => inst[key]?.set(v1, v2, v3));
  return true;
}
function setSkipFirstValue(inst, key, setter) {
  if (inst[`_vp_skip_first_set_${key}`])
    setPropertyValue(inst, key, setter);
  else
    inst[`_vp_skip_first_set_${key}`] = true;
  return true;
}

// src/renderer/internal/default-renderer.ts
var ContainerRender = {
  name: "Container",
  createElement: () => new import_pixi2.Container()
};
var ParticleContainerRender = {
  name: "ParticleContainer",
  createElement: (props) => new import_pixi2.ParticleContainer(
    props["max-size"] || props.maxSize,
    props.properties
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "max-size":
      case "properties":
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var SpriteRender = {
  name: "Sprite",
  createElement: (props) => new import_pixi2.Sprite(normalizeTexture(props.texture)),
  remove(node) {
    const texture = node.texture;
    texture?.baseTexture.destroy();
    node.destroy();
  }
};
var SimpleMeshRender = {
  name: "SimpleMesh",
  createElement: (props) => new import_pixi2.SimpleMesh(normalizeTexture(props.texture))
};
var GraphicsRender = {
  name: "Graphics",
  createElement: (props) => new import_pixi2.Graphics(props.geometry)
};
var TextRender = {
  name: "Text",
  createElement: (props) => new import_pixi2.Text(
    props.text,
    props.style,
    props.canvas
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "text":
        setSkipFirstValue(el, key, () => el.text = next);
        break;
      case "style":
        setSkipFirstValue(el, key, () => setObjectProperty(el, key, prev, next));
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var BitmapTextRender = {
  name: "BitmapText",
  createElement: (props) => new import_pixi2.BitmapText(
    props.text,
    props.style
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "text":
        setSkipFirstValue(el, key, () => el.text = next);
        break;
      case "style":
        break;
      case "dirty":
      case "roundPixels":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var TilingSpriteRender = {
  name: "TilingSprite",
  createElement: (props) => new import_pixi2.TilingSprite(
    normalizeTexture(props.texture),
    props.width,
    props.height
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "width":
      case "height":
        setSkipFirstValue(el, key, () => el[key] = next);
        break;
      case "uvRespectAnchor":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var AnimatedSpriteRender = {
  name: "AnimatedSprite",
  createElement: (props) => {
    return new import_pixi2.AnimatedSprite(
      props.textures.map(normalizeTexture),
      props["auto-update"] || props.autoUpdate
    );
  },
  patchProp(el, key, prev, next) {
    switch (key) {
      case "textures":
        setSkipFirstValue(el, key, () => {
          el.textures = next.map(normalizeTexture);
          el.loop && el.gotoAndPlay(0);
        });
        break;
      case "playing":
        const isPlaying = next === "" || !!next;
        setPropertyValue(el, key, () => isPlaying ? el.play() : el.stop());
        break;
      case "gotoAndPlay":
        setPropertyValue(el, key, () => el.gotoAndPlay(next));
        break;
      case "loop":
      case "updateAnchor":
        patchBooleanProp(el, key, prev, next);
        break;
      case "onComplete":
      case "onFrameChange":
      case "onLoop":
        Reflect.set(el, key, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var MeshRender = {
  name: "Mesh",
  createElement: (props) => new import_pixi2.Mesh(
    props.geometry,
    props.shader,
    props.state,
    props.drawMode
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "geometry":
      case "shader":
      case "state":
      case "drawMode":
        setSkipFirstValue(el, key, () => el[key] = next);
        break;
      case "roundPixels":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var NineSlicePlaneRender = {
  name: "NineSlicePlane",
  createElement: (props) => new import_pixi2.NineSlicePlane(
    normalizeTexture(props.texture)
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "roundPixels":
      case "autoResize":
        patchBooleanProp(el, key, prev, next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var SimplePlaneRender = {
  name: "SimplePlane",
  createElement: (props) => {
    return new import_pixi2.SimplePlane(
      normalizeTexture(props.texture),
      props.width,
      props.height
    );
  }
};
var SimpleRopeRender = {
  name: "SimpleRope",
  createElement: (props) => {
    return new import_pixi2.SimpleRope(
      normalizeTexture(props.texture),
      props.points
    );
  },
  patchProp(el, key, prev, next) {
    switch (key) {
      case "texture":
      case "points":
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var BlurFilterRender = {
  name: "BlurFilter",
  createElement: (props) => new import_pixi2.BlurFilter(
    props.blur,
    props.quality,
    props.resolution
  )
};
var AlphaFilterRender = {
  name: "AlphaFilter",
  createElement: (props) => new import_pixi2.AlphaFilter(props.alpha)
};
var DisplacementFilterRender = {
  name: "DisplacementFilter",
  createElement: (props) => new import_pixi2.DisplacementFilter(
    props.sprite,
    props.scale
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "sprite":
      case "scale":
        setSkipFirstValue(el, key, () => el.scale = next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var ColorMatrixFilterRender = {
  name: "ColorMatrixFilter",
  createElement: () => new import_pixi2.ColorMatrixFilter()
};
var NoiseFilterRender = {
  name: "NoiseFilter",
  createElement: (props) => new import_pixi2.NoiseFilter(
    props.noise,
    props.seed
  ),
  patchProp(el, key, prev, next) {
    switch (key) {
      case "noise":
      case "seed":
        setSkipFirstValue(el, key, () => el[key] = next);
        break;
      default:
        patchProp(el, key, prev, next);
    }
  }
};
var FXAAFilterRender = {
  name: "FXAAFilter",
  createElement: () => new import_pixi2.FXAAFilter()
};
var defaultRenderer = [
  ContainerRender,
  ParticleContainerRender,
  SpriteRender,
  SimpleMeshRender,
  GraphicsRender,
  TextRender,
  BitmapTextRender,
  TilingSpriteRender,
  AnimatedSpriteRender,
  MeshRender,
  NineSlicePlaneRender,
  SimplePlaneRender,
  SimpleRopeRender,
  BlurFilterRender,
  AlphaFilterRender,
  DisplacementFilterRender,
  ColorMatrixFilterRender,
  NoiseFilterRender,
  FXAAFilterRender
];

// src/renderer/internal/hooks.ts
function baseUse(options) {
  const { createElement: _createElement, name } = options;
  function createElement2(...args) {
    const element = _createElement(...args);
    element._vp_name = name;
    return element;
  }
  options.createElement = createElement2;
  renderers[name] = options;
}
function use(options) {
  if (Array.isArray(options))
    options.forEach(baseUse);
  else
    baseUse(options);
}

// src/renderer/internal/utils.ts
var import_vue_demi2 = require("vue-demi");

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

// src/renderer/internal/utils.ts
function rendererWithCapture(options) {
  const notOverrides = ["createComment", "insertStaticContent", "createText", "querySelector", "createElement"];
  for (const key in options) {
    if (notOverrides.includes(key))
      continue;
    const fn = options[key];
    if (key === "patchProp") {
      options[key] = (el, pKey, ...args) => {
        const inFn = renderers[el._vp_name]?.[key];
        pKey = (0, import_vue_demi2.camelize)(pKey);
        return inFn ? inFn(el, pKey, ...args) : fn(el, pKey, ...args);
      };
      continue;
    }
    options[key] = (el, ...args) => {
      const inFn = renderers[el._vp_name]?.[key];
      return inFn ? inFn?.(el, ...args) : fn(el, ...args);
    };
  }
  return options;
}
function rendererWithOptions(renderer2) {
  const _createApp = renderer2.createApp;
  const _render = renderer2.render;
  function createApp3(...args) {
    const app = _createApp(...args);
    Object.assign(app.config.compilerOptions, {
      isCustomElement
    });
    return app;
  }
  function render2(...args) {
    return _render(...args);
  }
  use(defaultRenderer);
  Object.assign(renderer2, { createApp: createApp3, render: render2, use });
}

// src/renderer/internal/custom.ts
var import_pixi3 = require("pixi.js");
var Empty = class extends import_pixi3.Sprite {
  constructor() {
    super(...arguments);
    __publicField(this, "visible", false);
    __publicField(this, "renderable", false);
    __publicField(this, "_vp_empty", true);
  }
  render() {
  }
};

// src/renderer/internal/options.ts
function insertFilter(child, parent, _anchor) {
  parent.filters ?? (parent.filters = []);
  function remove2() {
    const index = parent.filters.indexOf(child);
    parent.filters?.splice(index >>> 0, 1);
  }
  child.parent = parent;
  child.destroy = remove2;
  parent.filters.push(child);
}
function nextSiblingFilter(node) {
  const index = node.parent.filters.indexOf(node);
  if (node.parent.filters.length <= index + 1)
    return null;
  return node.parent.filters?.[index + 1];
}
function insertContainer(child, parent, anchor) {
  if (anchor)
    parent?.addChildAt(child, parent.getChildIndex(anchor));
  else if (child)
    parent.addChild(child);
}
function nextSiblingContainer(node) {
  const index = node.parent.getChildIndex(node);
  if (node.parent.children.length <= index + 1)
    return null;
  return node.parent.getChildAt(index + 1) ?? null;
}

// src/renderer/patchProp.ts
var defaultBooleanProps = ["accessible", "cullable", "renderable", "visible", "isMask"];
var pointProps = ["position", "scale", "pivot", "skew", "anchor", "tilePosition", "tileScale"];
function patchProp(el, key, prevValue, nextValue) {
  if (patchRenderProp(el, key, prevValue, nextValue))
    return;
  if (patchTextureProp(el, key, prevValue, nextValue))
    return;
  if (defaultBooleanProps.includes(key) && patchBooleanProp(el, key, prevValue, nextValue))
    return;
  if (patchPointProp(el, key, prevValue, nextValue))
    return;
  if (patchEventProp(el, key, prevValue, nextValue))
    return;
  Reflect.set(el, key, nextValue);
}
function patchTextureProp(el, key, _, nextValue) {
  if (key === "texture")
    return setSkipFirstValue(el, key, () => el.texture = normalizeTexture(nextValue));
  if (key === "textureOptions") {
    setTextureOptions(el.texture, nextValue);
    return true;
  }
  return false;
}
function patchRenderProp(el, key, prevValue, nextValue) {
  if (key === "onRender" && !prevValue && (0, import_utils3.isFunction)(nextValue)) {
    const scope = (0, import_vue_demi3.effectScope)();
    scope.run(() => (0, import_vue_demi3.watchEffect)(() => nextValue(el)));
    el.on("destroyed", () => scope.stop());
    return true;
  }
  return false;
}
function patchPointProp(el, key, prevValue, nextValue) {
  for (const name of pointProps) {
    if (key.startsWith(name))
      return setPointProperty(el, name, key, prevValue, nextValue);
  }
  return false;
}
function patchEventProp(el, key, prevValue, nextValue) {
  if (!key.startsWith("on"))
    return false;
  const eventName = key.slice(2).toLowerCase();
  if (prevValue)
    el.off(eventName, prevValue);
  if (nextValue)
    el?.on(eventName, nextValue);
  return true;
}
function patchBooleanProp(_el, _key, _prevValue, nextValue) {
  _el[_key] = nextValue === "" || !!nextValue;
  return true;
}

// src/renderer/nodeOps.ts
var import_pixi4 = require("pixi.js");
var import_vue_demi4 = require("vue-demi");
function createElement(prefix2, name, _, _1, props) {
  let is;
  if (name.startsWith(prefix2)) {
    name = (0, import_vue_demi4.camelize)(name);
    is = renderers[name.slice(prefix2.length)].createElement;
  } else {
    name = (0, import_vue_demi4.camelize)(name);
    name = name.charAt(0).toUpperCase() + name.slice(1);
    is = renderers[name].createElement;
  }
  if (!is) {
    (0, import_vue_demi4.warn)(`Unknown element ${name}`);
    is = () => new import_pixi4.Container();
  }
  const element = is(props ?? {});
  if (element instanceof import_pixi4.DisplayObject) {
    if (isOn(props) && element.eventMode === "auto")
      element.eventMode = "static";
  }
  if (element instanceof import_pixi4.Filter)
    element._vp_filter = true;
  (0, import_vue_demi4.markRaw)(element);
  return element;
}
function parentNode(node) {
  return node?.parent;
}
function createText(text) {
  text = text.replace(/\\n/g, "\n");
  return text ? new import_pixi4.Text(text) : new Empty(import_pixi4.Texture.EMPTY);
}
function createComment() {
  return new Empty(import_pixi4.Texture.EMPTY);
}
function remove(node) {
  node.destroy();
}
function insert(child, parent, anchor) {
  if (Reflect.get(child, "_vp_filter"))
    insertFilter(child, parent, anchor);
  else
    insertContainer(child, parent, anchor);
}
function nextSibling(node) {
  if (Reflect.get(node, "_vp_filter"))
    return nextSiblingFilter(node);
  else
    return nextSiblingContainer(node);
}
function setText(prefix2, node, text) {
  text = text.replace(/\\n/g, "\n");
  node instanceof import_pixi4.Text || node instanceof import_pixi4.BitmapText ? node.text = text.trim() : (0, import_vue_demi4.warn)(`Text is only supported with ${prefix2}-text element`);
}
var nodeOps = {
  createElement,
  parentNode,
  createText,
  createComment,
  remove,
  insert,
  nextSibling,
  setText
};

// src/renderer/renderer.ts
function createRenderer(options = {}) {
  const { createElement: createElement2, setText: setText2, ...nodeOps2 } = nodeOps;
  const { prefix: prefix2 = "pixi" } = options;
  const rendererOptions = rendererWithCapture({
    createElement: (...args) => createElement2(prefix2, ...args),
    setElementText: (...args) => setText2(prefix2, ...args),
    setText: (...args) => setText2(prefix2, ...args),
    patchProp,
    ...nodeOps2
  });
  return (0, import_vue_demi5.createRenderer)(rendererOptions);
}
var renderer = createRenderer();
rendererWithOptions(renderer);
var createApp = renderer.createApp;
var render = renderer.render;

// src/composables/onTick.ts
var import_core = require("@vueuse/core");
var import_pixi5 = require("pixi.js");
function onTick(fn) {
  function insert2() {
    import_pixi5.Ticker.shared.add(fn);
  }
  function remove2() {
    import_pixi5.Ticker.shared.remove(fn);
  }
  insert2();
  (0, import_core.tryOnBeforeUnmount)(remove2);
  return remove2;
}

// src/composables/useApplication.ts
var import_vue_demi6 = require("vue-demi");

// src/composables/internal/index.ts
var appInjectKey = Symbol("pixi_application");

// src/composables/useApplication.ts
function useApplication() {
  const app = (0, import_vue_demi6.ref)((0, import_vue_demi6.inject)(appInjectKey));
  if (!app.value)
    throw new Error("No PIXI Application found. Make sure to create one before using any other composable.");
  return app;
}

// src/composables/useRenderer.ts
var import_vue_demi7 = require("vue-demi");
function useRenderer() {
  const useApp = useApplication();
  return (0, import_vue_demi7.computed)(() => (0, import_vue_demi7.unref)(useApp).renderer);
}

// src/composables/useScreen.ts
var import_vue_demi8 = require("vue-demi");
var import_pixi6 = require("pixi.js");
var import_core2 = require("@vueuse/core");
function useScreen() {
  const useApp = useApplication();
  const view = (0, import_vue_demi8.computed)(() => (0, import_vue_demi8.unref)(useApp).view);
  const defaultRectangle = new import_pixi6.Rectangle();
  const screen = (0, import_core2.computedWithControl)(
    () => view.value,
    () => useApp.value?.screen || defaultRectangle
  );
  (0, import_core2.useResizeObserver)(view, screen.trigger);
  return screen;
}

// src/composables/useStage.ts
var import_vue_demi9 = require("vue-demi");
function useStage() {
  const useApp = useApplication();
  return (0, import_vue_demi9.computed)(() => (0, import_vue_demi9.unref)(useApp).stage);
}

// src/composables/onReady.ts
var import_vue_demi10 = require("vue-demi");
function onReady(callback) {
  const app = useApplication();
  if (app.value) {
    callback(app.value);
  } else {
    (0, import_vue_demi10.onMounted)(() => {
      if (app.value)
        callback(app.value);
    });
  }
}

// src/composables/useTrack.ts
var import_vue_demi11 = require("vue-demi");
var import_core3 = require("@vueuse/core");
function useTrack(target, key, defaultValue) {
  const trackRef = (0, import_vue_demi11.customRef)((track, trigger) => ({
    get: () => {
      track();
      const vtg_v = (0, import_core3.toValue)(target)?.[key];
      return vtg_v ?? defaultValue;
    },
    set: (value) => {
      const vtg = (0, import_core3.toValue)(target);
      vtg ? vtg[key] = value : defaultValue = value;
      trigger();
    }
  }));
  (0, import_core3.whenever)(
    () => (0, import_core3.toValue)(target),
    // @ts-expect-error
    (target2) => target2[key] ?? (target2[key] = defaultValue)
  );
  return trackRef;
}

// src/components/application/index.ts
var Application = (0, import_vue_demi12.defineComponent)({
  props: {
    antialias: { type: Boolean, default: true },
    autoDensity: { type: Boolean, default: true },
    autoStart: { type: Boolean, default: true },
    background: [Number, String, Array],
    backgroundColor: [Number, String, Array],
    backgroundAlpha: { type: Number, default: 1 },
    clearBeforeRender: { type: Boolean, default: true },
    forceCanvas: Boolean,
    alpha: Number,
    depth: Boolean,
    desynchronized: Boolean,
    failIfMajorPerformanceCaveat: Boolean,
    powerPreference: String,
    premultipliedAlpha: Boolean,
    preserveDrawingBuffer: Boolean,
    stencil: { type: Boolean, default: true },
    width: Number,
    height: Number,
    resolution: Number,
    resizeTo: Object
  },
  setup(props, { slots, expose }) {
    const canvas = (0, import_vue_demi12.ref)();
    const pixiApp = (0, import_vue_demi12.ref)();
    let app;
    function mount() {
      const context = canvas.value?.getContext("webgl", {
        alpha: props.alpha,
        antialias: props.antialias,
        depth: props.depth,
        desynchronized: props.desynchronized,
        failIfMajorPerformanceCaveat: props.failIfMajorPerformanceCaveat,
        powerPreference: props.powerPreference,
        premultipliedAlpha: props.premultipliedAlpha,
        preserveDrawingBuffer: props.preserveDrawingBuffer,
        stencil: props.stencil
      });
      if (!context)
        (0, import_vue_demi12.warn)("could not crate webgl context");
      const inst = new import_pixi7.Application({ view: canvas.value, ...props });
      pixiApp.value = (0, import_vue_demi12.markRaw)(inst);
      app = createApp({
        render: () => (0, import_vue_demi12.renderSlot)(slots, "default")
      });
      app.provide(appInjectKey, pixiApp);
      app.mount(pixiApp.value.stage);
    }
    function unmount() {
      app?.unmount();
      app = void 0;
      pixiApp.value?.destroy();
      pixiApp.value = void 0;
    }
    function resize() {
      if (!pixiApp.value)
        return;
      const width = props.width || pixiApp.value.renderer.width;
      const height = props.height || pixiApp.value.renderer.height;
      pixiApp.value.renderer.resize(width, height);
    }
    (0, import_vue_demi12.watch)(
      () => [props.width, props.height],
      (0, import_utils6.throttle)(50, resize)
    );
    (0, import_vue_demi12.onMounted)(mount);
    (0, import_vue_demi12.onUnmounted)(unmount);
    expose({ canvas, app: pixiApp });
    return () => (0, import_vue_demi12.h)("canvas", { ref: canvas });
  }
});

// src/components/external/index.ts
var import_vue_demi13 = require("vue-demi");

// src/components/external/utils/index.ts
function inheritParent(app, appContext) {
  const parent = appContext?.app;
  if (parent) {
    app.config.globalProperties = parent.config.globalProperties;
    Object.assign(app._context, parent._context);
  }
}

// src/components/external/index.ts
var External = (0, import_vue_demi13.defineComponent)({
  props: {
    tag: String,
    root: Object
  },
  setup(props, { slots, attrs }) {
    const { appContext } = (0, import_vue_demi13.getCurrentInstance)();
    const element = document.createElement("div");
    const pixiApp = (0, import_vue_demi13.ref)((0, import_vue_demi13.inject)(appInjectKey));
    const childApp = (0, import_vue_demi13.ref)();
    const root = props.root || pixiApp.value.view.parentNode;
    function mount() {
      if (!root)
        throw new Error("could not find root");
      const app = (0, import_vue_demi13.createApp)({
        render: () => (0, import_vue_demi13.h)(props.tag || "div", attrs, slots)
      });
      inheritParent(app, appContext);
      app.mount(element);
      root.appendChild(element.firstChild);
      childApp.value = app;
    }
    function unmount() {
      if (!childApp.value)
        return;
      childApp.value.unmount();
      childApp.value = void 0;
    }
    (0, import_vue_demi13.onMounted)(mount);
    (0, import_vue_demi13.onUnmounted)(unmount);
    return () => null;
  }
});

// src/components/loader/index.ts
var import_nanoid = require("nanoid");
var import_pixi8 = require("pixi.js");
var import_vue_demi14 = require("vue-demi");
var import_utils8 = require("@antfu/utils");
var loaderProps = {
  onResolved: Function,
  onProgress: Function,
  resources: {
    type: [Object, Array],
    required: true
  },
  options: {
    type: Object,
    default: () => ({})
  },
  bundleIds: String
};
var Loader = (0, import_vue_demi14.defineComponent)({
  props: loaderProps,
  setup(props, { slots }) {
    const loading = (0, import_vue_demi14.ref)(false);
    const textures = (0, import_vue_demi14.ref)();
    const progress = (0, import_vue_demi14.ref)(0);
    const bundle = props.bundleIds || (0, import_nanoid.nanoid)(5);
    function onProgress(p) {
      progress.value = p;
      props.onProgress?.(p);
    }
    async function load() {
      import_pixi8.Assets.addBundle(bundle, await resolveAssets(props.resources));
      const _textures = await import_pixi8.Assets.loadBundle(bundle, onProgress);
      for (const key in _textures)
        setTextureOptions(_textures[key], props.options);
      textures.value = _textures;
      props.onResolved?.(_textures);
    }
    async function unload() {
      const assetMap = import_pixi8.Assets.resolver._assetMap;
      for (const key in textures.value) {
        delete assetMap[key];
        delete assetMap[`${bundle}-${key}`];
      }
      await import_pixi8.Assets.unloadBundle(bundle);
    }
    (0, import_vue_demi14.watch)(
      () => [props.resources, props.bundleIds],
      () => {
        loading.value = true;
        load().finally(() => loading.value = false);
      },
      { deep: true, immediate: true }
    );
    (0, import_vue_demi14.onBeforeUnmount)(unload);
    return () => {
      return loading.value ? (0, import_vue_demi14.renderSlot)(slots, "fallback", { progress: progress.value }) : (0, import_vue_demi14.renderSlot)(slots, "default", { textures: textures.value });
    };
  }
});
async function parseAsset(asset) {
  const result = await asset;
  return (0, import_utils8.isString)(result) ? result : result.default;
}
async function resolveAssets(assets) {
  const result = {};
  for (const key in assets) {
    let asset = assets[key];
    asset = asset.default || asset;
    if (Array.isArray(asset)) {
      result[asset[0]] = await parseAsset(asset[1]);
      continue;
    }
    Array.isArray(assets) ? result[asset] = await parseAsset(asset) : result[key] = await parseAsset(asset);
  }
  return result;
}

// src/components/transition/components/Transition.ts
var import_vue_demi16 = require("vue-demi");

// src/components/transition/components/utils.ts
var import_utils9 = require("@antfu/utils");
var import_pixi9 = require("pixi.js");

// src/components/transition/utils/easing.ts
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}

// src/components/transition/utils/util.ts
var import_vue_demi15 = require("vue-demi");
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function linear(p) {
  return p;
}
function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}
function ignore(fn) {
  try {
    return fn();
  } catch {
  }
}
function createDeferred() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = (v) => {
    resolve(v);
  };
  promise.reject = reject;
  return promise;
}

// src/components/transition/utils/value.ts
var pointKeys = [
  "pivot",
  "anchor",
  "position",
  "scale",
  "tileScale",
  "tilePosition",
  "skew",
  "tile"
];
function setPropertyValue2(instance, prop, value) {
  const name = pointKeys.find((key) => prop.startsWith(key));
  if (!name) {
    instance[prop] = value;
    return;
  }
  switch (prop) {
    case name:
      if (typeof value === "object")
        return setObjectProperty2(instance, name, value);
      else
        return setPointProperty2(instance, name, value);
    case `${name}X`:
      return setField(instance[name], "x", value);
    case `${name}Y`:
      return setField(instance[name], "y", value);
  }
}
function setObjectProperty2(instance, name, value) {
  for (const key in value)
    setField(instance[name], key, value[key]);
}
function setField(instance, key, value) {
  if (instance[key] !== void 0)
    Reflect.set(instance, key, value);
}
function setPointProperty2(instance, key, value) {
  instance[key].set(value, value);
}
function setProps(instance, transitions) {
  const optionsKeys = ["delay", "duration", "ease"];
  for (const transition of transitions) {
    const fields = Object.keys(transition).filter((i) => !optionsKeys.includes(i));
    for (const key of fields)
      setPropertyValue2(instance, key, transition[key]);
  }
}
function getValue(instance, prop) {
  const name = pointKeys.find((key) => prop.startsWith(key));
  if (!name)
    return instance[prop];
  switch (prop) {
    case name:
      return instance[name].x || instance[name].y;
    case `${name}X`:
      return instance[name].x;
    case `${name}Y`:
      return instance[name].y;
  }
}

// src/components/transition/components/utils.ts
async function callInstanceSetterHook(instance, props, name) {
  const eventName = `on${name[0].toLocaleUpperCase()}${name.slice(1)}`;
  const hook = props[name] || props[eventName];
  const filters = instance.filters || [];
  if (!hook)
    return;
  if ((0, import_utils9.isFunction)(hook)) {
    hook(instance);
    return;
  }
  filters.forEach((filter) => callInstanceSetterHook(filter, filter, name));
  setProps(instance, (0, import_utils9.toArray)(hook));
}
async function callAnimationHook(instance, props, name, done, context) {
  const eventName = `on${name[0].toLocaleUpperCase()}${name.slice(1)}`;
  const hook = props[name] || props[eventName];
  for (const filter of instance.filters || [])
    callAnimationHook(filter, filter, name, import_utils9.noop);
  if (!hook)
    return;
  context = context || (instance._v_t_context ?? (instance._v_t_context = { id: 0, time: 0 }));
  const id = ++context.id;
  const abort = () => id !== context.id;
  if ((0, import_utils9.isFunction)(hook)) {
    return name === "enter" ? executeInTicker(hook(instance, done), done, abort, context) : executeOutTicker(hook(instance, done), done, abort, context);
  }
  const transitions = (0, import_utils9.toArray)(hook).filter(Boolean);
  const proceedings = transitions.map((transition) => {
    const duration = props.duration || transition.duration;
    return executeTransition(
      instance,
      normalize(duration)?.[name] ?? 1e3,
      transition,
      abort
    );
  });
  await Promise.all(proceedings);
  done();
}
async function executeTransition(instance, duration, transition, abort) {
  if (transition.delay)
    await delay(transition.delay);
  const optionsKeys = ["delay", "duration", "ease"];
  const fields = Object.keys(transition).filter((i) => !optionsKeys.includes(i));
  const startedAt = Date.now();
  const endAt = Date.now() + duration;
  transition.ease ?? (transition.ease = linear);
  const ease = !(0, import_utils9.isFunction)(transition.ease) ? createEasingFunction(transition.ease) : transition.ease;
  function exec(key) {
    const from = getValue(instance, key);
    const to = Number(transition[key]);
    const deferred = createDeferred();
    if (isNaN(to) || (0, import_utils9.isUndefined)(from))
      throw new Error(`Transition - {${key}} not valid field`);
    function tick() {
      if (abort?.())
        return deferred.resolve();
      const now = Date.now();
      const alpha = ease((now - startedAt) / duration);
      ignore(() => setPropertyValue2(instance, key, lerp(from, to, alpha)));
      if (now > endAt)
        deferred.resolve();
    }
    import_pixi9.Ticker.shared.add(tick);
    deferred.then(() => import_pixi9.Ticker.shared.remove(tick));
    return deferred;
  }
  await Promise.all(fields.map(exec));
}
async function executeInTicker(ticker, done, abort, context) {
  if (!ticker)
    return;
  const { duration, tick } = ticker;
  const startedAt = Date.now() - context.time;
  const endAt = Date.now() + duration - context.time;
  const deferred = createDeferred();
  function exec() {
    if (abort())
      return deferred.resolve();
    const now = Date.now();
    const progress = (now - startedAt) / duration;
    context.time = now - startedAt;
    tick(progress);
    endAt > now ? requestAnimationFrame(exec) : deferred.resolve();
  }
  exec();
  import_pixi9.Ticker.shared.add(exec);
  deferred.then(() => import_pixi9.Ticker.shared.remove(exec));
  deferred.then(() => done());
  return deferred;
}
async function executeOutTicker(ticker, done, abort, context) {
  if (!ticker)
    return;
  const { duration, tick } = ticker;
  const endAt = Date.now() + duration;
  const deferred = createDeferred();
  function exec() {
    if (abort?.())
      return deferred.resolve();
    const now = Date.now();
    const progress = (endAt - now) / duration;
    context.time = endAt - now;
    tick(progress);
    endAt > now ? requestAnimationFrame(exec) : deferred.resolve();
  }
  import_pixi9.Ticker.shared.add(exec);
  deferred.then(() => import_pixi9.Ticker.shared.remove(exec));
  deferred.then(() => done());
  return deferred;
}
function normalize(duration) {
  if (duration == null) {
    return null;
  } else if ((0, import_utils9.isObject)(duration)) {
    return duration;
  } else {
    const n = Number(duration);
    return { enter: n, leave: n };
  }
}

// src/components/transition/components/Transition.ts
var transitionProps = {
  duration: [Number, Object],
  beforeEnter: [Function, Object, Array],
  enter: [Function, Object, Array],
  afterEnter: [Function, Object, Array],
  enterCancelled: [Function, Object, Array],
  beforeLeave: [Function, Object, Array],
  leave: [Function, Object, Array],
  afterLeave: [Function, Object, Array],
  onBeforeEnter: Function,
  onEnter: Function,
  onAfterEnter: Function,
  onEnterCancelled: Function,
  onBeforeLeave: Function,
  onLeave: Function,
  onAfterLeave: Function,
  appear: Boolean
};
var PTransition = (0, import_vue_demi16.defineComponent)({
  name: "PTransition",
  props: transitionProps,
  setup(props, { slots }) {
    const rowProps = resolveTransitionProps(props, { id: 0, time: 0 });
    return () => (0, import_vue_demi16.h)(import_vue_demi16.BaseTransition, rowProps, slots);
  }
});
function resolveTransitionProps(props, context) {
  function onBeforeEnter(el) {
    callInstanceSetterHook(el, props, "beforeEnter");
  }
  function onEnter(el, done) {
    callAnimationHook(el, props, "enter", done, context);
  }
  function onAfterEnter(el) {
    callInstanceSetterHook(el, props, "afterEnter");
  }
  function onEnterCancelled(el) {
    callInstanceSetterHook(el, props, "afterEnter");
  }
  function onBeforeLeave(el) {
    callInstanceSetterHook(el, props, "beforeLeave");
  }
  async function onLeave(el, done) {
    callAnimationHook(el, props, "leave", done, context);
  }
  function onAfterLeave(el) {
    callInstanceSetterHook(el, props, "afterLeave");
  }
  return {
    css: false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    appear: props.appear
  };
}

// src/components/transition/components/TransitionGroup.ts
var import_vue_demi17 = require("vue-demi");
var PTransitionGroup = (0, import_vue_demi17.defineComponent)({
  name: "PTransitionGroup",
  props: transitionProps,
  setup(props, { slots }) {
    const instance = (0, import_vue_demi17.getCurrentInstance)();
    const state = (0, import_vue_demi17.useTransitionState)();
    const contexts = {};
    let prevChildren;
    let children;
    function callTransitionHooks(child, key) {
      if (key == null)
        return;
      contexts[key] ?? (contexts[key] = { id: 0, time: 0 });
      const rowProps = resolveTransitionProps(props, contexts[key]);
      const transitionHooks = (0, import_vue_demi17.resolveTransitionHooks)(child, rowProps, state, instance);
      (0, import_vue_demi17.setTransitionHooks)(child, transitionHooks);
    }
    return () => {
      prevChildren = children;
      children = slots.default ? (0, import_vue_demi17.getTransitionRawChildren)(slots.default()) : [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        callTransitionHooks(child, child.key);
      }
      if (prevChildren) {
        for (let i = 0; i < prevChildren.length; i++) {
          const child = prevChildren[i];
          callTransitionHooks(child, child.key);
        }
      }
      return (0, import_vue_demi17.createVNode)(import_vue_demi17.Fragment, null, children);
    };
  }
});

// src/components/transition/presets.ts
var _EasePresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var EasePresets = /* @__PURE__ */ Object.assign({}, { linear }, _EasePresets);

// src/global.ts
var import_runtime_core = require("@vue/runtime-core");
var import_pixi10 = require("pixi.js");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Application,
  EasePresets,
  External,
  Loader,
  PTransition,
  PTransitionGroup,
  PixiTransition,
  PixiTransitionGroup,
  appInjectKey,
  callInstanceSetter,
  compilerOptions,
  createApp,
  createRenderer,
  isCustomElement,
  isOn,
  loaderProps,
  nodeOps,
  normalizeTexture,
  onReady,
  onTick,
  patchProp,
  render,
  renderer,
  setObjectProperty,
  setPointProperty,
  setPropertyValue,
  setSkipFirstValue,
  setTextureOptions,
  transformAssetUrls,
  useApplication,
  useRenderer,
  useScreen,
  useStage,
  useTrack
});
