"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEYS = void 0;
const eslint_visitor_keys_1 = require("eslint-visitor-keys");
const svelteKeys = {
    Program: ["body"],
    SvelteScriptElement: ["name", "startTag", "body", "endTag"],
    SvelteStyleElement: ["name", "startTag", "children", "endTag"],
    SvelteElement: ["name", "startTag", "children", "endTag"],
    SvelteStartTag: ["attributes"],
    SvelteEndTag: [],
    SvelteName: [],
    SvelteMemberExpressionName: ["object", "property"],
    SvelteLiteral: [],
    SvelteMustacheTag: ["expression"],
    SvelteDebugTag: ["identifiers"],
    SvelteConstTag: ["declaration"],
    SvelteRenderTag: ["expression"],
    SvelteIfBlock: ["expression", "children", "else"],
    SvelteElseBlock: ["children"],
    SvelteEachBlock: [
        "expression",
        "context",
        "index",
        "key",
        "children",
        "else",
    ],
    SvelteAwaitBlock: ["expression", "pending", "then", "catch"],
    SvelteAwaitPendingBlock: ["children"],
    SvelteAwaitThenBlock: ["value", "children"],
    SvelteAwaitCatchBlock: ["error", "children"],
    SvelteKeyBlock: ["expression", "children"],
    SvelteSnippetBlock: ["id", "params", "children"],
    SvelteAttribute: ["key", "value"],
    SvelteShorthandAttribute: ["key", "value"],
    SvelteSpreadAttribute: ["argument"],
    SvelteDirective: ["key", "expression"],
    SvelteStyleDirective: ["key", "value"],
    SvelteSpecialDirective: ["key", "expression"],
    SvelteGenericsDirective: ["key", "params"],
    SvelteDirectiveKey: ["name"],
    SvelteSpecialDirectiveKey: [],
    SvelteText: [],
    SvelteHTMLComment: [],
    SvelteReactiveStatement: ["label", "body"],
};
exports.KEYS = (0, eslint_visitor_keys_1.unionWith)(svelteKeys);