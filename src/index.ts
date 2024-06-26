import * as AST from "./ast";
import { traverseNodes } from "./traverse";
import { KEYS } from "./visitor-keys";
import { ParseError } from "./errors";
export {
  parseForESLint,
  type StyleContext,
  type StyleContextNoStyleElement,
  type StyleContextParseError,
  type StyleContextSuccess,
  type StyleContextUnknownLang,
} from "./parser";
export * as meta from "./meta";
export { name } from "./meta";
export type { SvelteConfig } from "./svelte-config";

export { AST, ParseError };

// Keys
// eslint-disable-next-line @typescript-eslint/naming-convention -- ignore
export const VisitorKeys = KEYS;

// tools
export { traverseNodes };
