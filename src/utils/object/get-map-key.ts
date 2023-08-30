/**
 * Get the key of a map by value.
 * @param map - Map to get key from.
 * @param value - Value to get key for.
 * @returns - Key of the map.
 */
export const getMapKey = (map: Map<string, any>, value: any): string | undefined => {
    return [...map.entries()].find(([, v]) => v === value)?.[0];
};
