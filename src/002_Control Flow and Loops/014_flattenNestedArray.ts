type NestedArray = (number | NestedArray)[];

function flatten(arr: NestedArray): number[] {
    let result: number[] = [];
    for (let item of arr) {
        if (Array.isArray(item)) result = result.concat(flatten(item));
        else result.push(item);
    }
    return result;
}
console.log(flatten([1, [2, [3, 4]], 5]));
