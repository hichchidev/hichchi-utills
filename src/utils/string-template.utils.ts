// noinspection JSUnusedGlobalSymbols

import { toFirstCase, toSentenceCase, toSnakeCase } from "./string.utils";

/**
 * Apply error message prefix to a valid template string
 *
 * Acceptable template tags:
 * - `#{upperCase}`
 * - `#{snakeCase}`
 * - `#{upperSnakeCase}`
 * - `#{lowerCase}`
 * - `#{sentenceCase}`
 * - `#{firstCase}`
 *
 * @example
 * ```TypeScript
 * applyTemplate(
 *     'Cannot create a #{lowerCase} with this email. #{sentenceCase} already exists.',
 *     'User'
 * );
 * // Output: Cannot create a user with this email. User exists.
 * ```
 *
 * @param {string} str Template string to apply prefix
 * @param {string} prefix Prefix to apply
 * @returns {string} Prefix applied string
 */
export function applyTemplate(str: string, prefix: string): string {
    return str
        .replace("#{upperCase}", prefix.toUpperCase())
        .replace("#{snakeCase}", toSnakeCase(prefix))
        .replace("#{upperSnakeCase}", toSnakeCase(prefix, true))
        .replace("#{lowerCase}", prefix.toLowerCase())
        .replace("#{sentenceCase}", toSentenceCase(prefix))
        .replace("#{firstCase}", toFirstCase(prefix));
}
