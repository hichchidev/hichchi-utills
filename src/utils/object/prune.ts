export const prune = (obj: any, omitPrototype: boolean = false): any => {
    const objClone: any = {};
    if (obj === null || obj === undefined || obj === "") {
        return objClone;
    }
    for (const key in obj) {
        if (!omitPrototype || obj.hasOwnProperty(key)) {
            if (obj[key] !== null && typeof obj[key] === "object") {
                objClone[key] = prune(obj[key], omitPrototype);
            } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
                objClone[key] = obj[key];
            }
        }
    }
    return objClone;
};
