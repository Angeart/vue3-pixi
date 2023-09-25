import {
  __publicField,
  compilerOptions,
  isCustomElement,
  transformAssetUrls
} from "./chunk-ZZVMUWGL.js";
import "./chunk-2HIDMV4L.js";

// src/components/application/index.ts
import { defineComponent, h, markRaw as markRaw2, onMounted as onMounted2, onUnmounted, ref as ref2, renderSlot, warn as warn2, watch } from "vue-demi";
import { throttle } from "@antfu/utils";
import { Application as _Application } from "pixi.js";

// src/renderer/renderer.ts
import { createRenderer as _createRenderer } from "vue-demi";

// src/renderer/patchProp.ts
import { effectScope as effectScope2, watchEffect as watchEffect2 } from "vue-demi";
import { isFunction } from "@antfu/utils";

// src/renderer/utils/index.ts
import { Texture } from "pixi.js";
function setTextureOptions(texture, options = {}) {
  for (const key in options)
    texture.baseTexture[key] = options[key];
}
function normalizeTexture(value) {
  if (typeof value === "string")
    return Texture.from(value);
  return value;
}
function isOn(props) {
  return Object.keys(props || {}).some((p) => p.startsWith("on"));
}

// src/renderer/internal/constants.ts
var renderers = {};

// src/renderer/internal/default-renderer.ts
import {
  AlphaFilter,
  AnimatedSprite,
  BitmapText,
  BlurFilter,
  ColorMatrixFilter,
  Container,
  DisplacementFilter,
  FXAAFilter,
  Graphics,
  Mesh,
  NineSlicePlane,
  NoiseFilter,
  ParticleContainer,
  SimpleMesh,
  SimplePlane,
  SimpleRope,
  Sprite,
  Text,
  TilingSprite
} from "pixi.js";

// src/renderer/internal/setter.ts
import { isObject } from "@antfu/utils";
import { effectScope, nextTick, watchEffect } from "vue-demi";
function setObjectProperty(inst, key, prevValue, nextValue) {
  const scope = effectScope();
  function update() {
    if (prevValue && nextValue !== prevValue)
      inst[`__vp_scope_${key}`]?.stop();
    for (const [setKey, value] of Object.entries(nextValue))
      inst[key][setKey] = value;
  }
  scope.run(() => {
    watchEffect(update);
    nextTick(update);
  });
  inst.on?.("destroyed", () => scope.stop());
  inst[`__vp_scope_${key}`] = scope;
  return true;
}
function setPointProperty(inst, name, key, prevValue, nextValue) {
  switch (key) {
    case name:
      if (isObject(nextValue))
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
    nextTick(update);
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
  createElement: () => new Container()
};
var ParticleContainerRender = {
  name: "ParticleContainer",
  createElement: (props) => new ParticleContainer(
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
  createElement: (props) => new Sprite(normalizeTexture(props.texture)),
  remove(node) {
    const texture = node.texture;
    texture?.baseTexture.destroy();
    node.destroy();
  }
};
var SimpleMeshRender = {
  name: "SimpleMesh",
  createElement: (props) => new SimpleMesh(normalizeTexture(props.texture))
};
var GraphicsRender = {
  name: "Graphics",
  createElement: (props) => new Graphics(props.geometry)
};
var TextRender = {
  name: "Text",
  createElement: (props) => new Text(
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
  createElement: (props) => new BitmapText(
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
  createElement: (props) => new TilingSprite(
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
    return new AnimatedSprite(
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
  createElement: (props) => new Mesh(
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
  createElement: (props) => new NineSlicePlane(
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
    return new SimplePlane(
      normalizeTexture(props.texture),
      props.width,
      props.height
    );
  }
};
var SimpleRopeRender = {
  name: "SimpleRope",
  createElement: (props) => {
    return new SimpleRope(
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
  createElement: (props) => new BlurFilter(
    props.blur,
    props.quality,
    props.resolution
  )
};
var AlphaFilterRender = {
  name: "AlphaFilter",
  createElement: (props) => new AlphaFilter(props.alpha)
};
var DisplacementFilterRender = {
  name: "DisplacementFilter",
  createElement: (props) => new DisplacementFilter(
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
  createElement: () => new ColorMatrixFilter()
};
var NoiseFilterRender = {
  name: "NoiseFilter",
  createElement: (props) => new NoiseFilter(
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
  createElement: () => new FXAAFilter()
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
import { camelize } from "vue-demi";
function rendererWithCapture(options) {
  const notOverrides = ["createComment", "insertStaticContent", "createText", "querySelector", "createElement"];
  for (const key in options) {
    if (notOverrides.includes(key))
      continue;
    const fn = options[key];
    if (key === "patchProp") {
      options[key] = (el, pKey, ...args) => {
        const inFn = renderers[el._vp_name]?.[key];
        pKey = camelize(pKey);
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
import { Sprite as Sprite2 } from "pixi.js";
var Empty = class extends Sprite2 {
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
  if (key === "onRender" && !prevValue && isFunction(nextValue)) {
    const scope = effectScope2();
    scope.run(() => watchEffect2(() => nextValue(el)));
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
import { BitmapText as BitmapText2, Container as Container2, DisplayObject, Filter, Text as Text2, Texture as Texture2 } from "pixi.js";
import { camelize as camelize2, markRaw, warn } from "vue-demi";
function createElement(prefix, name, _, _1, props) {
  let is;
  if (name.startsWith(prefix)) {
    name = camelize2(name);
    is = renderers[name.slice(prefix.length)].createElement;
  } else {
    name = camelize2(name);
    name = name.charAt(0).toUpperCase() + name.slice(1);
    is = renderers[name].createElement;
  }
  if (!is) {
    warn(`Unknown element ${name}`);
    is = () => new Container2();
  }
  const element = is(props ?? {});
  if (element instanceof DisplayObject) {
    if (isOn(props) && element.eventMode === "auto")
      element.eventMode = "static";
  }
  if (element instanceof Filter)
    element._vp_filter = true;
  markRaw(element);
  return element;
}
function parentNode(node) {
  return node?.parent;
}
function createText(text) {
  text = text.replace(/\\n/g, "\n");
  return text ? new Text2(text) : new Empty(Texture2.EMPTY);
}
function createComment() {
  return new Empty(Texture2.EMPTY);
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
function setText(prefix, node, text) {
  text = text.replace(/\\n/g, "\n");
  node instanceof Text2 || node instanceof BitmapText2 ? node.text = text.trim() : warn(`Text is only supported with ${prefix}-text element`);
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
  const { prefix = "pixi" } = options;
  const rendererOptions = rendererWithCapture({
    createElement: (...args) => createElement2(prefix, ...args),
    setElementText: (...args) => setText2(prefix, ...args),
    setText: (...args) => setText2(prefix, ...args),
    patchProp,
    ...nodeOps2
  });
  return _createRenderer(rendererOptions);
}
var renderer = createRenderer();
rendererWithOptions(renderer);
var createApp = renderer.createApp;
var render = renderer.render;

// src/composables/onTick.ts
import { tryOnBeforeUnmount } from "@vueuse/core";
import { Ticker } from "pixi.js";
function onTick(fn) {
  function insert2() {
    Ticker.shared.add(fn);
  }
  function remove2() {
    Ticker.shared.remove(fn);
  }
  insert2();
  tryOnBeforeUnmount(remove2);
  return remove2;
}

// src/composables/useApplication.ts
import { inject, ref } from "vue-demi";

// src/composables/internal/index.ts
var appInjectKey = Symbol("pixi_application");

// src/composables/useApplication.ts
function useApplication() {
  const app = ref(inject(appInjectKey));
  if (!app.value)
    throw new Error("No PIXI Application found. Make sure to create one before using any other composable.");
  return app;
}

// src/composables/useRenderer.ts
import { computed, unref } from "vue-demi";
function useRenderer() {
  const useApp = useApplication();
  return computed(() => unref(useApp).renderer);
}

// src/composables/useScreen.ts
import { computed as computed2, unref as unref2 } from "vue-demi";
import { Rectangle } from "pixi.js";
import { computedWithControl, useResizeObserver } from "@vueuse/core";
function useScreen() {
  const useApp = useApplication();
  const view = computed2(() => unref2(useApp).view);
  const defaultRectangle = new Rectangle();
  const screen = computedWithControl(
    () => view.value,
    () => useApp.value?.screen || defaultRectangle
  );
  useResizeObserver(view, screen.trigger);
  return screen;
}

// src/composables/useStage.ts
import { computed as computed3, unref as unref3 } from "vue-demi";
function useStage() {
  const useApp = useApplication();
  return computed3(() => unref3(useApp).stage);
}

// src/composables/onReady.ts
import { onMounted } from "vue-demi";
function onReady(callback) {
  const app = useApplication();
  if (app.value) {
    callback(app.value);
  } else {
    onMounted(() => {
      if (app.value)
        callback(app.value);
    });
  }
}

// src/composables/useTrack.ts
import { customRef } from "vue-demi";
import { toValue, whenever } from "@vueuse/core";
function useTrack(target, key, defaultValue) {
  const trackRef = customRef((track, trigger) => ({
    get: () => {
      track();
      const vtg_v = toValue(target)?.[key];
      return vtg_v ?? defaultValue;
    },
    set: (value) => {
      const vtg = toValue(target);
      vtg ? vtg[key] = value : defaultValue = value;
      trigger();
    }
  }));
  whenever(
    () => toValue(target),
    // @ts-expect-error
    (target2) => target2[key] ?? (target2[key] = defaultValue)
  );
  return trackRef;
}

// src/components/application/index.ts
var Application = defineComponent({
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
    const canvas = ref2();
    const pixiApp = ref2();
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
        warn2("could not crate webgl context");
      const inst = new _Application({ view: canvas.value, ...props });
      pixiApp.value = markRaw2(inst);
      app = createApp({
        render: () => renderSlot(slots, "default")
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
    watch(
      () => [props.width, props.height],
      throttle(50, resize)
    );
    onMounted2(mount);
    onUnmounted(unmount);
    expose({ canvas, app: pixiApp });
    return () => h("canvas", { ref: canvas });
  }
});

// src/components/external/index.ts
import { createApp as createApp2, defineComponent as defineComponent2, getCurrentInstance, h as h2, inject as inject2, onMounted as onMounted3, onUnmounted as onUnmounted2, ref as ref3 } from "vue-demi";

// src/components/external/utils/index.ts
function inheritParent(app, appContext) {
  const parent = appContext?.app;
  if (parent) {
    app.config.globalProperties = parent.config.globalProperties;
    Object.assign(app._context, parent._context);
  }
}

// src/components/external/index.ts
var External = defineComponent2({
  props: {
    tag: String,
    root: Object
  },
  setup(props, { slots, attrs }) {
    const { appContext } = getCurrentInstance();
    const element = document.createElement("div");
    const pixiApp = ref3(inject2(appInjectKey));
    const childApp = ref3();
    const root = props.root || pixiApp.value.view.parentNode;
    function mount() {
      if (!root)
        throw new Error("could not find root");
      const app = createApp2({
        render: () => h2(props.tag || "div", attrs, slots)
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
    onMounted3(mount);
    onUnmounted2(unmount);
    return () => null;
  }
});

// src/components/loader/index.ts
import { nanoid } from "nanoid";
import { Assets } from "pixi.js";
import { defineComponent as defineComponent3, onBeforeUnmount, ref as ref4, renderSlot as renderSlot2, watch as watch2 } from "vue-demi";
import { isString } from "@antfu/utils";
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
var Loader = defineComponent3({
  props: loaderProps,
  setup(props, { slots }) {
    const loading = ref4(false);
    const textures = ref4();
    const progress = ref4(0);
    const bundle = props.bundleIds || nanoid(5);
    function onProgress(p) {
      progress.value = p;
      props.onProgress?.(p);
    }
    async function load() {
      Assets.addBundle(bundle, await resolveAssets(props.resources));
      const _textures = await Assets.loadBundle(bundle, onProgress);
      for (const key in _textures)
        setTextureOptions(_textures[key], props.options);
      textures.value = _textures;
      props.onResolved?.(_textures);
    }
    async function unload() {
      const assetMap = Assets.resolver._assetMap;
      for (const key in textures.value) {
        delete assetMap[key];
        delete assetMap[`${bundle}-${key}`];
      }
      await Assets.unloadBundle(bundle);
    }
    watch2(
      () => [props.resources, props.bundleIds],
      () => {
        loading.value = true;
        load().finally(() => loading.value = false);
      },
      { deep: true, immediate: true }
    );
    onBeforeUnmount(unload);
    return () => {
      return loading.value ? renderSlot2(slots, "fallback", { progress: progress.value }) : renderSlot2(slots, "default", { textures: textures.value });
    };
  }
});
async function parseAsset(asset) {
  const result = await asset;
  return isString(result) ? result : result.default;
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
import { BaseTransition, defineComponent as defineComponent4, h as h3 } from "vue-demi";

// src/components/transition/components/utils.ts
import { isFunction as isFunction2, isObject as isObject2, isUndefined, noop, toArray } from "@antfu/utils";
import { Ticker as Ticker2 } from "pixi.js";

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
import { camelize as camelize3 } from "vue-demi";
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
  if (isFunction2(hook)) {
    hook(instance);
    return;
  }
  filters.forEach((filter) => callInstanceSetterHook(filter, filter, name));
  setProps(instance, toArray(hook));
}
async function callAnimationHook(instance, props, name, done, context) {
  const eventName = `on${name[0].toLocaleUpperCase()}${name.slice(1)}`;
  const hook = props[name] || props[eventName];
  for (const filter of instance.filters || [])
    callAnimationHook(filter, filter, name, noop);
  if (!hook)
    return;
  context = context || (instance._v_t_context ?? (instance._v_t_context = { id: 0, time: 0 }));
  const id = ++context.id;
  const abort = () => id !== context.id;
  if (isFunction2(hook)) {
    return name === "enter" ? executeInTicker(hook(instance, done), done, abort, context) : executeOutTicker(hook(instance, done), done, abort, context);
  }
  const transitions = toArray(hook).filter(Boolean);
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
  const ease = !isFunction2(transition.ease) ? createEasingFunction(transition.ease) : transition.ease;
  function exec(key) {
    const from = getValue(instance, key);
    const to = Number(transition[key]);
    const deferred = createDeferred();
    if (isNaN(to) || isUndefined(from))
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
    Ticker2.shared.add(tick);
    deferred.then(() => Ticker2.shared.remove(tick));
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
  Ticker2.shared.add(exec);
  deferred.then(() => Ticker2.shared.remove(exec));
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
  Ticker2.shared.add(exec);
  deferred.then(() => Ticker2.shared.remove(exec));
  deferred.then(() => done());
  return deferred;
}
function normalize(duration) {
  if (duration == null) {
    return null;
  } else if (isObject2(duration)) {
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
var PTransition = defineComponent4({
  name: "PTransition",
  props: transitionProps,
  setup(props, { slots }) {
    const rowProps = resolveTransitionProps(props, { id: 0, time: 0 });
    return () => h3(BaseTransition, rowProps, slots);
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
import {
  Fragment,
  createVNode,
  defineComponent as defineComponent5,
  getCurrentInstance as getCurrentInstance2,
  getTransitionRawChildren,
  resolveTransitionHooks,
  setTransitionHooks,
  useTransitionState
} from "vue-demi";
var PTransitionGroup = defineComponent5({
  name: "PTransitionGroup",
  props: transitionProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance2();
    const state = useTransitionState();
    const contexts = {};
    let prevChildren;
    let children;
    function callTransitionHooks(child, key) {
      if (key == null)
        return;
      contexts[key] ?? (contexts[key] = { id: 0, time: 0 });
      const rowProps = resolveTransitionProps(props, contexts[key]);
      const transitionHooks = resolveTransitionHooks(child, rowProps, state, instance);
      setTransitionHooks(child, transitionHooks);
    }
    return () => {
      prevChildren = children;
      children = slots.default ? getTransitionRawChildren(slots.default()) : [];
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
      return createVNode(Fragment, null, children);
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
export {
  Application,
  EasePresets,
  External,
  Loader,
  PTransition,
  PTransitionGroup,
  PTransition as PixiTransition,
  PTransitionGroup as PixiTransitionGroup,
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
};
