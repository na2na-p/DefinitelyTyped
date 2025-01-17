// Type definitions for case-sensitive-paths-webpack-plugin 2.1
// Project: https://github.com/Urthen/case-sensitive-paths-webpack-plugin#readme
// Definitions by: Andrew Makarov <https://github.com/r3nya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Compiler, Plugin } from "webpack";

export = CaseSensitivePathsWebpackPlugin;

declare class CaseSensitivePathsWebpackPlugin extends Plugin {
    constructor(options?: CaseSensitivePathsWebpackPlugin.Options);

    apply(compiler: Compiler): void;
}

declare namespace CaseSensitivePathsWebpackPlugin {
    interface Options {
        /**
         * Show more information
         */
        debug?: boolean | undefined;
        /**
         * Run before emit instead of after resolve for individual files
         */
        useBeforeEmitHook?: boolean | undefined;
    }
}
