/**
 * Converts a flat object with dot-separated keys to a nested object.
 * @param filters - Flat object with dot-separated keys.
 */
export const pathToObject = (filters: { [key: string]: any }): { [key: string]: any } => {
    const result: { [key: string]: any } = {};

    const setObject = (obj: { [key: string]: any }, keys: string[], value: any): void => {
        const [firstKey, ...remainingKeys] = keys;
        if (remainingKeys.length === 0) {
            obj[firstKey] = value;
            return;
        }

        obj[firstKey] = obj[firstKey] || {};
        setObject(obj[firstKey], remainingKeys, value);
    };

    const isValidPath = (path: string): boolean => {
        const regex = /^[a-zA-Z0-9_.-]+$/;
        return path.split(".").every((part) => regex.test(part));
    };

    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            if (!isValidPath(key)) {
                throw new Error(`Invalid path: ${key}`);
            }
            setObject(result, key.split("."), filters[key]);
        }
    }

    return result;
};
