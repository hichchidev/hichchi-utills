import { breakToWords } from "./break-to-words";

/**
 * Convert a string to upper cases and break into words.
 * @example <em>`HELLO WORLD`</em>.
 * @param str - String to convert to upper cases and break into words.
 * @returns - String in upper cases and broken into words.
 */
export const toUpperCaseBreak = (str?: string): string => {
    if (!str) {
        return "";
    }
    return breakToWords(str)
        .map((s) => s.toUpperCase())
        .join(" ");
};
