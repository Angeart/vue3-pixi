declare function isCustomElement(name: string): boolean;
declare const compilerOptions: {
    isCustomElement: typeof isCustomElement;
};
declare const transformAssetUrls: {
    sprite: string[];
};

export { compilerOptions, isCustomElement, transformAssetUrls };
