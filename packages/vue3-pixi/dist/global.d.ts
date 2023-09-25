import { DefineComponent, ComponentOptionsMixin, VNodeProps } from 'vue-demi';
import * as PIXI from 'pixi.js';
import { Cursor, Rectangle, Filter, IHitArea, EventMode, Container, MaskData, IPointData, DisplayObjectEvents, DisplayObject, BlurFilter, AlphaFilter, DisplacementFilter, ISpriteMaskTarget, ColorMatrixFilter, FXAAFilter, IParticleProperties, ParticleContainer } from 'pixi.js';

interface AllowedPixiProps {
    accessible?: boolean;
    accessibleChildren?: number;
    accessibleHint?: string;
    accessiblePointerEvents?: string;
    accessibleTitle?: string;
    accessibleType?: string;
    alpha?: number;
    cursor?: Cursor;
    cacheAsBitmap?: boolean;
    cacheAsBitmapMultisample?: number | unknown;
    cacheAsBitmapResolution?: number | unknown;
    cullable?: boolean;
    cullArea?: Rectangle;
    filterArea?: Rectangle;
    filters?: Filter[];
    hitArea?: IHitArea;
    eventMode?: EventMode;
    mask?: Container | MaskData | null;
    name?: string;
    x?: number;
    y?: number;
    position?: Partial<IPointData> | number | [number, number];
    positionY?: number;
    positionX?: number;
    anchor?: Partial<IPointData> | number | [number, number];
    anchorX?: number;
    anchorY?: number;
    pivot?: Partial<IPointData> | number | [number, number];
    pivotX?: number;
    pivotY?: number;
    renderable?: boolean;
    rotation?: number;
    angle?: number;
    scale?: Partial<IPointData> | number | [number, number];
    scaleX?: number;
    scaleY?: number;
    width?: number;
    height?: number;
    skew?: Partial<IPointData> | number | [number, number];
    skewX?: number;
    skewY?: number;
    visible?: boolean;
    zIndex?: number;
}
interface AllowedFilterProps extends Partial<Omit<Filter, 'destroy'>> {
    is?: (props: any) => Filter;
}
type ExtractFilterProps<T> = Partial<Omit<T, keyof AllowedFilterProps | 'destroy'>>;

type PixiEvents = DisplayObjectEvents & {
    childAdded: [child: DisplayObject, container: Container, index: number];
    childRemoved: [child: DisplayObject, container: Container, index: number];
};

interface SimpleRopeProps {
    texture: string | PIXI.Texture;
    points: PIXI.IPoint[];
    textureScale?: number;
    autoUpdate?: number;
    shader?: PIXI.Shader | PIXI.MeshMaterial;
    blendMode?: PIXI.BLEND_MODES;
    drawMode?: PIXI.DRAW_MODES;
    material?: PIXI.Shader;
    roundPixels?: boolean;
    size?: number;
    start?: number;
    state?: PIXI.State;
    tint?: PIXI.ColorSource;
    canvasPadding?: number;
}
interface SimpleRopeEvents extends PixiEvents {
    render: [SimpleRopeInst];
}
type SimpleRopeInst = PIXI.SimpleRope & EventTarget;
type SimpleRopeComponent = DefineComponent<SimpleRopeProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof SimpleRopeEvents)[], keyof SimpleRopeEvents, VNodeProps & AllowedPixiProps, Readonly<SimpleRopeProps> & {
    [key in keyof SimpleRopeEvents as `on${Capitalize<key>}`]?: ((...args: SimpleRopeEvents[key]) => any) | undefined;
}, {}>;

interface SimplePlaneProps {
    texture: string | PIXI.Texture;
    points: PIXI.IPoint[];
    shader?: PIXI.Shader | PIXI.MeshMaterial;
    blendMode?: PIXI.BLEND_MODES;
    drawMode?: PIXI.DRAW_MODES;
    material?: PIXI.Shader;
    roundPixels?: boolean;
    size?: number;
    start?: number;
    state?: PIXI.State;
    tint?: PIXI.ColorSource;
    canvasPadding?: number;
    autoResize?: boolean;
}
interface SimplePlaneEvents extends PixiEvents {
    render: [SimplePlaneInst];
}
type SimplePlaneInst = PIXI.SimplePlane & EventTarget;
type SimplePlaneComponent = DefineComponent<SimplePlaneProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof SimplePlaneEvents)[], keyof SimplePlaneEvents, VNodeProps & AllowedPixiProps, Readonly<SimplePlaneProps> & {
    [key in keyof SimplePlaneEvents as `on${Capitalize<key>}`]?: ((...args: SimplePlaneEvents[key]) => any) | undefined;
}, {}>;

interface NineSlicePlaneProps {
    texture: PIXI.Texture | string;
    leftWidth?: number;
    rightWidth?: number;
    topHeight?: number;
    bottomHeight?: number;
    verticesX?: number;
    verticesY?: number;
    shader?: PIXI.Shader | PIXI.MeshMaterial;
    blendMode?: PIXI.BLEND_MODES;
    drawMode?: PIXI.DRAW_MODES;
    material?: PIXI.Shader;
    roundPixels?: boolean;
    size?: number;
    start?: number;
    state?: PIXI.State;
    tint?: PIXI.ColorSource;
    canvasPadding?: number;
    autoResize?: boolean;
}
interface NineSliceEvents extends PixiEvents {
    render: [NineSliceInst];
}
type NineSliceInst = PIXI.NineSlicePlane & EventTarget;
type NineSlicePlaneComponent = DefineComponent<NineSlicePlaneProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof NineSliceEvents)[], keyof NineSliceEvents, VNodeProps & AllowedPixiProps, Readonly<NineSlicePlaneProps> & {
    [key in keyof NineSliceEvents as `on${Capitalize<key>}`]?: ((...args: NineSliceEvents[key]) => any) | undefined;
}, {}>;

interface MeshProps {
    geometry: PIXI.Geometry;
    shader: PIXI.Shader | PIXI.MeshMaterial;
    blendMode?: PIXI.BLEND_MODES;
    drawMode?: PIXI.DRAW_MODES;
    material?: PIXI.Shader;
    roundPixels?: boolean;
    size?: number;
    start?: number;
    state?: PIXI.State;
    texture?: string | PIXI.Texture;
    tint?: PIXI.ColorSource;
    canvasPadding?: number;
}
interface MeshEvents extends PixiEvents {
    render: [MeshInst];
}
type MeshInst = PIXI.Mesh & EventTarget;
type MeshComponent = DefineComponent<MeshProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof MeshEvents)[], keyof MeshEvents, VNodeProps & AllowedPixiProps, Readonly<MeshProps> & {
    [key in keyof MeshEvents as `on${Capitalize<key>}`]?: ((...args: MeshEvents[key]) => any) | undefined;
}, {}>;

interface AnimatedSpriteProps extends AllowedPixiProps {
    textures: (PIXI.Texture | string)[];
    width?: number;
    height?: number;
    playing?: boolean;
    gotoAndPlay?: number;
    anchor?: PIXI.IPointData | number;
    anchorX?: number;
    anchorY?: number;
    blendMode?: PIXI.BLEND_MODES;
    pluginName?: string;
    tint?: PIXI.ColorSource;
    animationSpeed?: number;
    autoUpdate?: PIXI.AnimatedSprite['autoUpdate'];
    currentFrame?: number;
    loop?: boolean;
    updateAnchor?: boolean;
    roundPixels?: boolean;
}
interface AnimatedSpriteEvents extends PixiEvents {
    complete: [];
    frameChange: [number];
    'update:currentFrame': [number];
    loop: [];
    render: [AnimatedSpriteInst];
}
type AnimatedSpriteInst = PIXI.AnimatedSprite & EventTarget;
type AnimatedSpriteComponent = DefineComponent<AnimatedSpriteProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof AnimatedSpriteEvents)[], keyof AnimatedSpriteEvents, VNodeProps, Readonly<AnimatedSpriteProps> & {
    [key in keyof AnimatedSpriteEvents as `on${Capitalize<key>}`]?: ((...args: AnimatedSpriteEvents[key]) => any) | undefined;
}, {}>;

interface TilingSpriteProps {
    texture: string | PIXI.Texture;
    textureOptions?: PIXI.IBaseTextureOptions;
    width?: number;
    height?: number;
    anchor?: PIXI.IPointData | number;
    anchorX?: number;
    anchorY?: number;
    blendMode?: PIXI.BLEND_MODES;
    pluginName?: string;
    tint?: PIXI.ColorSource;
    clampMargin?: number;
    tilePosition?: Partial<PIXI.IPointData> | number | [number, number];
    tilePositionX?: number;
    tilePositionY?: number;
    tileScale?: Partial<PIXI.IPointData> | number | [number, number];
    tileScaleX?: number;
    tileScaleY?: number;
    tileTransform?: PIXI.Transform;
    uvMatrix?: PIXI.TextureMatrix;
    uvRespectAnchor?: boolean;
}
interface TilingSpriteEvents extends PixiEvents {
    render: [TilingSpriteInst];
}
type TilingSpriteInst = PIXI.TilingSprite & EventTarget;
type TilingSpriteComponent = DefineComponent<TilingSpriteProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof TilingSpriteEvents)[], keyof TilingSpriteEvents, VNodeProps & AllowedPixiProps, Readonly<TilingSpriteProps> & {
    [key in keyof TilingSpriteEvents as `on${Capitalize<key>}`]?: ((...args: TilingSpriteEvents[key]) => any) | undefined;
}, {}>;

interface TextProps {
    text?: string | number;
    style?: PIXI.TextStyle | Partial<PIXI.ITextStyle>;
    canvas?: PIXI.ICanvas;
    context?: PIXI.ICanvasRenderingContext2D;
    resolution?: number;
    width?: number;
}
interface TextEvents extends PixiEvents {
    render: [TextInst];
}
type TextInst = PIXI.Text & EventTarget;
type TextComponent = DefineComponent<TextProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof TextEvents)[], keyof TextEvents, VNodeProps & AllowedPixiProps, Readonly<TextProps> & {
    [key in keyof TextEvents as `on${Capitalize<key>}`]?: ((...args: TextEvents[key]) => any) | undefined;
}, {}>;

interface GraphicsProps {
    blendMode?: PIXI.BLEND_MODES;
    pluginName?: string;
    shader?: PIXI.Shader;
    tint?: PIXI.ColorSource;
    geometry?: PIXI.GraphicsGeometry;
    isMask?: boolean;
}
interface GraphicsEvents extends PixiEvents {
    render: [GraphicsInst];
}
type GraphicsInst = PIXI.Graphics & EventTarget;
type GraphicsComponent = DefineComponent<GraphicsProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof GraphicsEvents)[], keyof GraphicsEvents, VNodeProps & AllowedPixiProps, Readonly<GraphicsProps> & {
    [key in keyof GraphicsEvents as `on${Capitalize<key>}`]?: ((...args: GraphicsEvents[key]) => any) | undefined;
}, {}>;

interface ContainerProps {
}
interface ContainerEvents extends PixiEvents {
    render: [ContainerInst];
}
type ContainerInst = Container & EventTarget;
type ContainerComponent = DefineComponent<ContainerProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof ContainerEvents)[], keyof ContainerEvents, VNodeProps & AllowedPixiProps, Readonly<ContainerProps> & {
    [key in keyof ContainerEvents as `on${Capitalize<key>}`]?: ((...args: ContainerEvents[key]) => any) | undefined;
}, {}>;

interface SpriteProps extends AllowedPixiProps {
    texture: string | PIXI.Texture;
    textureOptions?: PIXI.IBaseTextureOptions;
    blendMode?: PIXI.BLEND_MODES;
    width?: number;
    height?: number;
    pluginName?: string;
    tint?: PIXI.ColorSource;
}
interface SpriteEvents extends PixiEvents {
    render: [SpriteInst];
}
type SpriteInst = PIXI.Sprite & EventTarget;
type SpriteComponent = DefineComponent<SpriteProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof SpriteEvents)[], keyof SpriteEvents, VNodeProps, Readonly<SpriteProps> & {
    [key in keyof SpriteEvents as `on${Capitalize<key>}`]?: ((...args: SpriteEvents[key]) => any) | undefined;
}, {}>;

interface BitmapTextProps {
    text?: string | number;
    style?: Partial<PIXI.IBitmapTextStyle>;
    align?: string;
    anchor?: PIXI.IPointData | number;
    anchorX?: number;
    anchorY?: number;
    dirty?: boolean;
    fontName?: string;
    fontSize?: number;
    letterSpacing?: number;
    maxWidth?: number;
    resolution?: number;
    roundPixels?: boolean;
    tint?: PIXI.ColorSource;
}
interface BitmapTextEvents extends PixiEvents {
    'update:dirty': [boolean];
    render: [BitmapTextInst];
}
type BitmapTextInst = PIXI.BitmapText & EventTarget;
type BitmapTextComponent = DefineComponent<BitmapTextProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof BitmapTextEvents)[], keyof BitmapTextEvents, VNodeProps & AllowedPixiProps, Readonly<BitmapTextProps> & {
    [key in keyof BitmapTextEvents as `on${Capitalize<key>}`]?: ((...args: BitmapTextEvents[key]) => any) | undefined;
}, {}>;

interface FilterProps<T> {
    is: (props: any) => T;
}
interface FilterEvents {
    render: [FilterInst];
}
type FilterInst = Filter;
type EventsProps = {
    [key in keyof FilterEvents as `on${Capitalize<key>}`]?: ((...args: FilterEvents[key]) => any) | undefined;
};
type FilterComponent = <T extends AllowedFilterProps>(props: FilterProps<T> & Partial<T> & EventsProps) => any;

interface BlurFilterProps extends ExtractFilterProps<BlurFilter> {
    strength?: number;
    resolution?: number;
    kernelSize?: number;
}
interface BlurFilterEvents {
    render: [BlurFilterInst];
}
type BlurFilterInst = BlurFilter;
type BlurFilterComponent = DefineComponent<BlurFilterProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof BlurFilterEvents)[], keyof BlurFilterEvents, VNodeProps & AllowedFilterProps, Readonly<BlurFilterProps> & {
    [key in keyof BlurFilterEvents as `on${Capitalize<key>}`]?: ((...args: BlurFilterEvents[key]) => any) | undefined;
}, {}>;

interface AlphaFilterProps extends ExtractFilterProps<AlphaFilter> {
}
interface AlphaFilterEvents {
    render: [AlphaFilterInst];
}
type AlphaFilterInst = AlphaFilter;
type AlphaFilterComponent = DefineComponent<AlphaFilterProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof AlphaFilterEvents)[], keyof AlphaFilterEvents, VNodeProps & AllowedFilterProps, Readonly<AlphaFilterProps> & {
    [key in keyof AlphaFilterEvents as `on${Capitalize<key>}`]?: ((...args: AlphaFilterEvents[key]) => any) | undefined;
}, {}>;

interface DisplacementFilterProps extends ExtractFilterProps<DisplacementFilter> {
    sprite: ISpriteMaskTarget;
}
interface DisplacementFilterEvents {
    render: [DisplacementFilterInst];
}
type DisplacementFilterInst = DisplacementFilter;
type DisplacementFilterComponent = DefineComponent<DisplacementFilterProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof DisplacementFilterEvents)[], keyof DisplacementFilterEvents, VNodeProps & AllowedFilterProps, Readonly<DisplacementFilterProps> & {
    [key in keyof DisplacementFilterEvents as `on${Capitalize<key>}`]?: ((...args: DisplacementFilterEvents[key]) => any) | undefined;
}, {}>;

interface ColorMatrixFilterProps extends ExtractFilterProps<ColorMatrixFilter> {
}
interface ColorMatrixFilterEvents {
    render: [ColorMatrixFilterInst];
}
type ColorMatrixFilterInst = ColorMatrixFilter;
type ColorMatrixFilterComponent = DefineComponent<ColorMatrixFilterProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof ColorMatrixFilterEvents)[], keyof ColorMatrixFilterEvents, VNodeProps & AllowedFilterProps, Readonly<ColorMatrixFilterProps> & {
    [key in keyof ColorMatrixFilterEvents as `on${Capitalize<key>}`]?: ((...args: ColorMatrixFilterEvents[key]) => any) | undefined;
}, {}>;

interface FXAAFilterProps extends ExtractFilterProps<FXAAFilter> {
}
interface FXAAFilterEvents {
    render: [FXAAFilterInst];
}
type FXAAFilterInst = FXAAFilter;
type FXAAFilterComponent = DefineComponent<FXAAFilterProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof FXAAFilterEvents)[], keyof FXAAFilterEvents, VNodeProps & AllowedFilterProps, Readonly<FXAAFilterProps> & {
    [key in keyof FXAAFilterEvents as `on${Capitalize<key>}`]?: ((...args: FXAAFilterEvents[key]) => any) | undefined;
}, {}>;

interface ParticleContainerProps {
    autoResize?: boolean;
    blendMode?: number;
    maxSize?: number;
    properties?: IParticleProperties;
}
interface ParticleContainerEvents extends PixiEvents {
    render: [ParticleContainerInst];
}
type ParticleContainerInst = ParticleContainer & EventTarget;
type ParticleContainerComponent = DefineComponent<ParticleContainerProps, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, (keyof ParticleContainerEvents)[], keyof ParticleContainerEvents, VNodeProps & AllowedPixiProps, Readonly<ParticleContainerProps> & {
    [key in keyof ParticleContainerEvents as `on${Capitalize<key>}`]?: ((...args: ParticleContainerEvents[key]) => any) | undefined;
}, {}>;

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Filter: FilterComponent;
        PixiFilter: FilterComponent;
        BlurFilter: BlurFilterComponent;
        PixiBlurFilter: BlurFilterComponent;
        AlphaFilter: AlphaFilterComponent;
        PixiAlphaFilter: AlphaFilterComponent;
        DisplacementFilter: DisplacementFilterComponent;
        PixiDisplacementFilter: DisplacementFilterComponent;
        ColorMatrixFilter: ColorMatrixFilterComponent;
        PixiColorMatrixFilter: ColorMatrixFilterComponent;
        FXAAFilter: FXAAFilterComponent;
        PixiFXAAFilter: FXAAFilterComponent;
        Container: ContainerComponent;
        PixiContainer: ContainerComponent;
        ParticleContainer: ParticleContainerComponent;
        PixiParticleContainer: ParticleContainerComponent;
        Sprite: SpriteComponent;
        PixiSprite: SpriteComponent;
        Graphics: GraphicsComponent;
        PixiGraphics: GraphicsComponent;
        Text: TextComponent;
        PixiText: TextComponent;
        BitmapText: BitmapTextComponent;
        PixiBitmapText: BitmapTextComponent;
        TilingSprite: TilingSpriteComponent;
        PixiTilingSprite: TilingSpriteComponent;
        AnimatedSprite: AnimatedSpriteComponent;
        PixiAnimatedSprite: AnimatedSpriteComponent;
        Mesh: MeshComponent;
        PixiMesh: MeshComponent;
        SimplePlane: SimplePlaneComponent;
        PixiSimplePlane: SimplePlaneComponent;
        NineSlicePlane: NineSlicePlaneComponent;
        PixiNineSlicePlane: NineSlicePlaneComponent;
        SimpleRope: SimpleRopeComponent;
        PixiSimpleRope: SimpleRopeComponent;
    }
}
declare module 'pixi.js' {
    interface Filter {
        parent: Container;
        _vp_name: string;
        _vp_filter: boolean;
    }
    interface Container {
        _vp_name: string;
    }
}

export { AllowedFilterProps, AllowedPixiProps, AlphaFilterComponent, AlphaFilterEvents, AlphaFilterInst, AlphaFilterProps, AnimatedSpriteComponent, AnimatedSpriteEvents, AnimatedSpriteInst, AnimatedSpriteProps, BitmapTextComponent, BitmapTextEvents, BitmapTextInst, BitmapTextProps, BlurFilterComponent, BlurFilterEvents, BlurFilterInst, BlurFilterProps, ColorMatrixFilterComponent, ColorMatrixFilterEvents, ColorMatrixFilterInst, ColorMatrixFilterProps, ContainerComponent, ContainerEvents, ContainerInst, ContainerProps, DisplacementFilterComponent, DisplacementFilterEvents, DisplacementFilterInst, DisplacementFilterProps, ExtractFilterProps, FXAAFilterComponent, FXAAFilterEvents, FXAAFilterInst, FXAAFilterProps, FilterComponent, FilterEvents, FilterInst, FilterProps, GraphicsComponent, GraphicsEvents, GraphicsInst, GraphicsProps, MeshComponent, MeshEvents, MeshInst, MeshProps, NineSliceEvents, NineSliceInst, NineSlicePlaneComponent, NineSlicePlaneProps, ParticleContainerComponent, ParticleContainerEvents, ParticleContainerInst, ParticleContainerProps, PixiEvents, SimplePlaneComponent, SimplePlaneEvents, SimplePlaneInst, SimplePlaneProps, SimpleRopeComponent, SimpleRopeEvents, SimpleRopeInst, SimpleRopeProps, SpriteComponent, SpriteEvents, SpriteInst, SpriteProps, TextComponent, TextEvents, TextInst, TextProps, TilingSpriteComponent, TilingSpriteEvents, TilingSpriteInst, TilingSpriteProps };
