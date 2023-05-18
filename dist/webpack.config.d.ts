export const entry: string;
export const mode: string;
export namespace module {
    const rules: {
        test: RegExp;
        use: string;
        exclude: RegExp;
    }[];
}
export namespace resolve {
    const extensions: string[];
}
export namespace output {
    const filename: string;
    const path: string;
    const libraryTarget: string;
}
export namespace optimization {
    const minimize: boolean;
}
