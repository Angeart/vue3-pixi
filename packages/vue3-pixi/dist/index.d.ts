import * as vue_demi from 'vue-demi';
import { PropType, ExtractPropTypes, VNode, Ref, ToRef, InjectionKey, RendererOptions as RendererOptions$1, VNodeProps, Renderer as Renderer$1 } from 'vue-demi';
import { Application as Application$1, ColorSource, IBaseTextureOptions, TickerCallback, IRenderer, Rectangle, Container, Sprite, DisplayObject, Texture } from 'pixi.js';
import { MaybeRefOrGetter } from '@vueuse/core';
export { AllowedFilterProps, AllowedPixiProps, AlphaFilterComponent, AlphaFilterEvents, AlphaFilterInst, AlphaFilterProps, AnimatedSpriteComponent, AnimatedSpriteEvents, AnimatedSpriteInst, AnimatedSpriteProps, BitmapTextComponent, BitmapTextEvents, BitmapTextInst, BitmapTextProps, BlurFilterComponent, BlurFilterEvents, BlurFilterInst, BlurFilterProps, ColorMatrixFilterComponent, ColorMatrixFilterEvents, ColorMatrixFilterInst, ColorMatrixFilterProps, ContainerComponent, ContainerEvents, ContainerInst, ContainerProps, DisplacementFilterComponent, DisplacementFilterEvents, DisplacementFilterInst, DisplacementFilterProps, ExtractFilterProps, FXAAFilterComponent, FXAAFilterEvents, FXAAFilterInst, FXAAFilterProps, FilterComponent, FilterEvents, FilterInst, FilterProps, GraphicsComponent, GraphicsEvents, GraphicsInst, GraphicsProps, MeshComponent, MeshEvents, MeshInst, MeshProps, NineSliceEvents, NineSliceInst, NineSlicePlaneComponent, NineSlicePlaneProps, ParticleContainerComponent, ParticleContainerEvents, ParticleContainerInst, ParticleContainerProps, PixiEvents, SimplePlaneComponent, SimplePlaneEvents, SimplePlaneInst, SimplePlaneProps, SimpleRopeComponent, SimpleRopeEvents, SimpleRopeInst, SimpleRopeProps, SpriteComponent, SpriteEvents, SpriteInst, SpriteProps, TextComponent, TextEvents, TextInst, TextProps, TilingSpriteComponent, TilingSpriteEvents, TilingSpriteInst, TilingSpriteProps } from './global.js';
export { compilerOptions, isCustomElement, transformAssetUrls } from './compiler.js';

interface ApplicationInst {
    canvas: HTMLCanvasElement;
    app: Application$1;
}
declare const Application: vue_demi.DefineComponent<{
    antialias: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDensity: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: PropType<ColorSource>;
    backgroundColor: PropType<ColorSource>;
    backgroundAlpha: {
        type: NumberConstructor;
        default: number;
    };
    clearBeforeRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    forceCanvas: BooleanConstructor;
    alpha: NumberConstructor;
    depth: BooleanConstructor;
    desynchronized: BooleanConstructor;
    failIfMajorPerformanceCaveat: BooleanConstructor;
    powerPreference: PropType<WebGLPowerPreference>;
    premultipliedAlpha: BooleanConstructor;
    preserveDrawingBuffer: BooleanConstructor;
    stencil: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    resolution: NumberConstructor;
    resizeTo: PropType<HTMLElement | Window | undefined>;
}, () => vue_demi.VNode<vue_demi.RendererNode, vue_demi.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<vue_demi.ExtractPropTypes<{
    antialias: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDensity: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: PropType<ColorSource>;
    backgroundColor: PropType<ColorSource>;
    backgroundAlpha: {
        type: NumberConstructor;
        default: number;
    };
    clearBeforeRender: {
        type: BooleanConstructor;
        default: boolean;
    };
    forceCanvas: BooleanConstructor;
    alpha: NumberConstructor;
    depth: BooleanConstructor;
    desynchronized: BooleanConstructor;
    failIfMajorPerformanceCaveat: BooleanConstructor;
    powerPreference: PropType<WebGLPowerPreference>;
    premultipliedAlpha: BooleanConstructor;
    preserveDrawingBuffer: BooleanConstructor;
    stencil: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: NumberConstructor;
    height: NumberConstructor;
    resolution: NumberConstructor;
    resizeTo: PropType<HTMLElement | Window | undefined>;
}>>, {
    antialias: boolean;
    autoDensity: boolean;
    autoStart: boolean;
    backgroundAlpha: number;
    clearBeforeRender: boolean;
    forceCanvas: boolean;
    depth: boolean;
    desynchronized: boolean;
    failIfMajorPerformanceCaveat: boolean;
    premultipliedAlpha: boolean;
    preserveDrawingBuffer: boolean;
    stencil: boolean;
}, {}>;

declare const External: vue_demi.DefineComponent<{
    tag: PropType<keyof HTMLElementTagNameMap>;
    root: PropType<HTMLElement>;
}, () => null, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<vue_demi.ExtractPropTypes<{
    tag: PropType<keyof HTMLElementTagNameMap>;
    root: PropType<HTMLElement>;
}>>, {}, {}>;

type LoadAsset = string | {
    default: string;
} | Promise<string | {
    default: string;
}>;
type LoadAssets = Record<string, LoadAsset> | (LoadAsset | [string, LoadAsset])[];
declare const loaderProps: {
    onResolved: PropType<(textures: any) => void>;
    onProgress: PropType<(progress: number) => void>;
    resources: {
        type: PropType<LoadAssets>;
        required: true;
    };
    options: {
        type: PropType<IBaseTextureOptions<any>>;
        default: () => {};
    };
    bundleIds: StringConstructor;
};
type LoaderProps = ExtractPropTypes<typeof loaderProps>;
declare const Loader: vue_demi.DefineComponent<{
    onResolved: PropType<(textures: any) => void>;
    onProgress: PropType<(progress: number) => void>;
    resources: {
        type: PropType<LoadAssets>;
        required: true;
    };
    options: {
        type: PropType<IBaseTextureOptions<any>>;
        default: () => {};
    };
    bundleIds: StringConstructor;
}, () => vue_demi.VNode<vue_demi.RendererNode, vue_demi.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<ExtractPropTypes<{
    onResolved: PropType<(textures: any) => void>;
    onProgress: PropType<(progress: number) => void>;
    resources: {
        type: PropType<LoadAssets>;
        required: true;
    };
    options: {
        type: PropType<IBaseTextureOptions<any>>;
        default: () => {};
    };
    bundleIds: StringConstructor;
}>>, {
    options: IBaseTextureOptions<any>;
}, {}>;

type CubicBezierPoints = [number, number, number, number];
type Hook<T = () => void> = T | TransitionVars | TransitionVars[];
interface EasingFunction {
    (p: number): number;
}
interface PixiMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    array?: number[];
}
interface PixiVars {
    [key: string]: any;
    alpha?: number | string;
    anchor?: number;
    anchorX?: number | string;
    anchorY?: number | string;
    angle?: number | string;
    autoAlpha?: number;
    blur?: number;
    blurX?: number;
    blurY?: number;
    blurPadding?: number;
    brightness?: number;
    colorize?: string | number;
    colorizeAmount?: number;
    colorMatrixFilter?: object;
    combineCMF?: boolean;
    contrast?: number;
    fillColor?: string | number;
    height?: number | string;
    hue?: number;
    lineColor?: string | number;
    matrix?: PixiMatrix;
    pivot?: number;
    pivotX?: number | string;
    pivotY?: number | string;
    position?: number | string;
    positionX?: number | string;
    positionY?: number | string;
    resolution?: number;
    rotation?: number | string;
    saturation?: number;
    scale?: number | string;
    scaleX?: number | string;
    scaleY?: number | string;
    skew?: number | string;
    skewX?: number | string;
    skewY?: number | string;
    tilePosition?: number;
    tilePositionX?: number | string;
    tilePositionY?: number | string;
    tileScale?: number;
    tileScaleX?: number | string;
    tileScaleY?: number | string;
    tileX?: number | string;
    tileY?: number | string;
    tint?: string | number;
    width?: number | string;
    x?: number | string;
    y?: number | string;
    zIndex?: number | string;
}
interface TransitionVars extends PixiVars {
    delay?: number;
    duration?: number;
    ease?: CubicBezierPoints | EasingFunction;
}
interface TransitionTicker {
    duration: number;
    tick: (time: number) => void;
}
type Fn = () => any;

declare const transitionProps: {
    duration: PropType<number | {
        enter: number;
        leave: number;
    }>;
    beforeEnter: PropType<Hook<(el: any) => void>>;
    enter: PropType<Hook<(el: any, done: Fn) => TransitionTicker | void>>;
    afterEnter: PropType<Hook<(el: any) => void>>;
    enterCancelled: PropType<Hook<(el: any) => void>>;
    beforeLeave: PropType<Hook<(el: any) => void>>;
    leave: PropType<Hook<(el: any, done: Fn) => TransitionTicker | void>>;
    afterLeave: PropType<Hook<(el: any) => void>>;
    onBeforeEnter: PropType<(el: any) => void>;
    onEnter: PropType<(el: any, done: Fn) => void>;
    onAfterEnter: PropType<(el: any) => void>;
    onEnterCancelled: PropType<(el: any) => void>;
    onBeforeLeave: PropType<(el: any) => void>;
    onLeave: PropType<(el: any, done: Fn) => void>;
    onAfterLeave: PropType<(el: any) => void>;
    appear: BooleanConstructor;
};
type TransitionProps = ExtractPropTypes<typeof transitionProps>;
declare const PTransition: vue_demi.DefineComponent<{
    duration: PropType<number | {
        enter: number;
        leave: number;
    }>;
    beforeEnter: PropType<Hook<(el: any) => void>>;
    enter: PropType<Hook<(el: any, done: Fn) => TransitionTicker | void>>;
    afterEnter: PropType<Hook<(el: any) => void>>;
    enterCancelled: PropType<Hook<(el: any) => void>>;
    beforeLeave: PropType<Hook<(el: any) => void>>;
    leave: PropType<Hook<(el: any, done: Fn) => TransitionTicker | void>>;
    afterLeave: PropType<Hook<(el: any) => void>>;
    onBeforeEnter: PropType<(el: any) => void>;
    onEnter: PropType<(el: any, done: Fn) => void>;
    onAfterEnter: PropType<(el: any) => void>;
    onEnterCancelled: PropType<(el: any) => void>;
    onBeforeLeave: PropType<(el: any) => void>;
    onLeave: PropType<(el: any, done: Fn) => void>;
    onAfterLeave: PropType<(el: any) => void>;
    appear: BooleanConstructor;
}, () => vue_demi.VNode<vue_demi.RendererNode, vue_demi.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<ExtractPropTypes<{
    duration: PropType<number | {
        enter: number;
        leave: number;
    }>;
    beforeEnter: PropType<Hook<(el: any) => void>>;
    enter: PropType<Hook<(el: any, done: Fn) => TransitionTicker | void>>;
    afterEnter: PropType<Hook<(el: any) => void>>;
    enterCancelled: PropType<Hook<(el: any) => void>>;
    beforeLeave: PropType<Hook<(el: any) => void>>;
    leave: PropType<Hook<(el: any, done: Fn) => TransitionTicker | void>>;
    afterLeave: PropType<Hook<(el: any) => void>>;
    onBeforeEnter: PropType<(el: any) => void>;
    onEnter: PropType<(el: any, done: Fn) => void>;
    onAfterEnter: PropType<(el: any) => void>;
    onEnterCancelled: PropType<(el: any) => void>;
    onBeforeLeave: PropType<(el: any) => void>;
    onLeave: PropType<(el: any, done: Fn) => void>;
    onAfterLeave: PropType<(el: any) => void>;
    appear: BooleanConstructor;
}>>, {
    appear: boolean;
}, {}>;

declare const PTransitionGroup: vue_demi.DefineComponent<{
    duration: vue_demi.PropType<number | {
        enter: number;
        leave: number;
    }>;
    beforeEnter: vue_demi.PropType<Hook<(el: any) => void>>;
    enter: vue_demi.PropType<Hook<(el: any, done: Fn) => void | TransitionTicker>>;
    afterEnter: vue_demi.PropType<Hook<(el: any) => void>>;
    enterCancelled: vue_demi.PropType<Hook<(el: any) => void>>;
    beforeLeave: vue_demi.PropType<Hook<(el: any) => void>>;
    leave: vue_demi.PropType<Hook<(el: any, done: Fn) => void | TransitionTicker>>;
    afterLeave: vue_demi.PropType<Hook<(el: any) => void>>;
    onBeforeEnter: vue_demi.PropType<(el: any) => void>;
    onEnter: vue_demi.PropType<(el: any, done: Fn) => void>;
    onAfterEnter: vue_demi.PropType<(el: any) => void>;
    onEnterCancelled: vue_demi.PropType<(el: any) => void>;
    onBeforeLeave: vue_demi.PropType<(el: any) => void>;
    onLeave: vue_demi.PropType<(el: any, done: Fn) => void>;
    onAfterLeave: vue_demi.PropType<(el: any) => void>;
    appear: BooleanConstructor;
}, () => VNode<vue_demi.RendererNode, vue_demi.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, {}, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<vue_demi.ExtractPropTypes<{
    duration: vue_demi.PropType<number | {
        enter: number;
        leave: number;
    }>;
    beforeEnter: vue_demi.PropType<Hook<(el: any) => void>>;
    enter: vue_demi.PropType<Hook<(el: any, done: Fn) => void | TransitionTicker>>;
    afterEnter: vue_demi.PropType<Hook<(el: any) => void>>;
    enterCancelled: vue_demi.PropType<Hook<(el: any) => void>>;
    beforeLeave: vue_demi.PropType<Hook<(el: any) => void>>;
    leave: vue_demi.PropType<Hook<(el: any, done: Fn) => void | TransitionTicker>>;
    afterLeave: vue_demi.PropType<Hook<(el: any) => void>>;
    onBeforeEnter: vue_demi.PropType<(el: any) => void>;
    onEnter: vue_demi.PropType<(el: any, done: Fn) => void>;
    onAfterEnter: vue_demi.PropType<(el: any) => void>;
    onEnterCancelled: vue_demi.PropType<(el: any) => void>;
    onBeforeLeave: vue_demi.PropType<(el: any) => void>;
    onLeave: vue_demi.PropType<(el: any, done: Fn) => void>;
    onAfterLeave: vue_demi.PropType<(el: any) => void>;
    appear: BooleanConstructor;
}>>, {
    appear: boolean;
}, {}>;

/**
 * Common transitions
 *
 * @see https://easings.net
 */
declare const EasePresets: Record<"easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInExpo" | "easeOutExpo" | "easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInBack" | "easeOutBack" | "easeInOutBack", CubicBezierPoints> & {
    linear: EasingFunction;
};

declare function onTick(fn: TickerCallback<any>): () => void;

declare function useApplication<T = Application$1>(): Ref<T>;

declare function useRenderer(): Ref<IRenderer>;

declare function useScreen(): Ref<Rectangle>;

type StageInst = Container & EventTarget;
declare function useStage(): Ref<StageInst>;

declare function onReady(callback: (app: Application$1) => void): void;

type OmitUndef<T> = Exclude<T, undefined>;
type TrackRef<T, K extends keyof OmitUndef<T>> = T extends undefined ? ToRef<OmitUndef<T>[K] | undefined> : ToRef<OmitUndef<T>[K]>;
declare function useTrack<T, K extends keyof OmitUndef<T>>(target: MaybeRefOrGetter<T>, key: K): TrackRef<T, K>;
declare function useTrack<T, K extends keyof OmitUndef<T>>(target: MaybeRefOrGetter<T>, key: K, defaultValue: OmitUndef<T>[K]): ToRef<OmitUndef<T>[K]>;

declare const appInjectKey: InjectionKey<Application$1 | Ref<Application$1>>;

interface RendererOptions extends Partial<Omit<RendererOptions$1<any, any>, 'createText' | 'createElement'>> {
    name: string;
    createElement(props: VNodeProps & {
        [key: string]: any;
    }): any;
}
type Renderer = RendererOptions | RendererOptions[];

declare function use(options: Renderer): void;

declare class Empty extends Sprite {
    render(): void;
    visible: boolean;
    renderable: boolean;
    _vp_empty: boolean;
}

declare function setObjectProperty(inst: any, key: string, prevValue: any, nextValue: any): boolean;
declare function setPointProperty(inst: any, name: string, key: string, prevValue: any, nextValue: any): boolean;
declare function setPropertyValue(inst: any, key: string, setter: () => void): boolean;
declare function callInstanceSetter(inst: any, key: string, value: any | any[]): boolean;
declare function setSkipFirstValue(inst: any, key: string, setter: () => void): boolean;

interface VuePIXIRenderer<T = Container<DisplayObject>> extends Renderer$1<T> {
    use: typeof use;
}
declare function createRenderer(options?: {
    prefix?: string;
}): Renderer$1<Container<DisplayObject>>;
declare const renderer: VuePIXIRenderer<Container<DisplayObject>>;
declare const createApp: vue_demi.CreateAppFunction<Container<DisplayObject>>;
declare const render: vue_demi.RootRenderFunction<Container<DisplayObject>>;

declare function setTextureOptions(texture: Texture, options?: IBaseTextureOptions): void;
declare function normalizeTexture(value: Texture | string): Texture;
declare function isOn(props?: any): boolean;

declare function patchProp(el: any, key: string, prevValue: any, nextValue: any): void;

declare function createElement(prefix: string, name: string, _?: boolean, _1?: string, props?: any): any;
declare function parentNode(node: any): any;
declare function createText(text: string): any;
declare function createComment(): Empty;
declare function remove(node: Container): void;
declare function insert(child: Container, parent: Container, anchor?: Container | null): void;
declare function nextSibling(node: Container): any;
declare function setText(prefix: string, node: Container, text: string): void;
declare const nodeOps: {
    createElement: typeof createElement;
    parentNode: typeof parentNode;
    createText: typeof createText;
    createComment: typeof createComment;
    remove: typeof remove;
    insert: typeof insert;
    nextSibling: typeof nextSibling;
    setText: typeof setText;
};

export { Application, ApplicationInst, CubicBezierPoints, EasePresets, EasingFunction, External, LoadAsset, LoadAssets, Loader, LoaderProps, OmitUndef, PTransition, PTransitionGroup, PixiMatrix, PTransition as PixiTransition, PTransitionGroup as PixiTransitionGroup, PixiVars, Renderer, RendererOptions, StageInst, TrackRef, TransitionProps, TransitionTicker, TransitionVars, VuePIXIRenderer, appInjectKey, callInstanceSetter, createApp, createRenderer, isOn, loaderProps, nodeOps, normalizeTexture, onReady, onTick, patchProp, render, renderer, setObjectProperty, setPointProperty, setPropertyValue, setSkipFirstValue, setTextureOptions, useApplication, useRenderer, useScreen, useStage, useTrack };
