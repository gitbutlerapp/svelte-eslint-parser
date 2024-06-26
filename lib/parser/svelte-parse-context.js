"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSvelteParseContextForSvelteScript = exports.resolveSvelteParseContextForSvelte = exports.isEnableRunes = void 0;
const svelte_version_1 = require("./svelte-version");
function isEnableRunes(svelteConfig, parserOptions) {
    var _a, _b;
    if (!svelte_version_1.svelteVersion.gte(5))
        return false;
    if (((_a = parserOptions.svelteFeatures) === null || _a === void 0 ? void 0 : _a.runes) != null) {
        return Boolean(parserOptions.svelteFeatures.runes);
    }
    if (((_b = svelteConfig === null || svelteConfig === void 0 ? void 0 : svelteConfig.compilerOptions) === null || _b === void 0 ? void 0 : _b.runes) != null) {
        return Boolean(svelteConfig.compilerOptions.runes);
    }
    return true;
}
exports.isEnableRunes = isEnableRunes;
function resolveSvelteParseContextForSvelte(svelteConfig, parserOptions, svelteAst) {
    const svelteOptions = svelteAst.options;
    if ((svelteOptions === null || svelteOptions === void 0 ? void 0 : svelteOptions.runes) != null) {
        return {
            runes: svelteOptions.runes,
            compilerVersion: svelte_version_1.compilerVersion,
            svelteConfig,
        };
    }
    return {
        runes: isEnableRunes(svelteConfig, parserOptions),
        compilerVersion: svelte_version_1.compilerVersion,
        svelteConfig,
    };
}
exports.resolveSvelteParseContextForSvelte = resolveSvelteParseContextForSvelte;
function resolveSvelteParseContextForSvelteScript(svelteConfig, parserOptions) {
    return resolveSvelteParseContext(svelteConfig, parserOptions);
}
exports.resolveSvelteParseContextForSvelteScript = resolveSvelteParseContextForSvelteScript;
function resolveSvelteParseContext(svelteConfig, parserOptions) {
    return {
        runes: isEnableRunes(svelteConfig, parserOptions),
        compilerVersion: svelte_version_1.compilerVersion,
        svelteConfig,
    };
}
