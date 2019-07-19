function compare(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return Object.is(obj1, obj2);
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    return Object.keys(obj1).every((key) => compare(obj1[key], obj2[key]));
}

const o1 = {a: "a", b: "b", c: {c1: "c1"}};
const o2 = {a: "a", b: "b", c: {c1: "c2"}}; 
const o3 = {a: "a", c: {c1: "c1"}}; 
const o4 = {...o1}; 
const o5 = o1; 

console.log([
    compare(o1, o2), // false
    compare(o1, o3), // false
    compare(o1, o4), // true
    compare(o1, o5), // true
    compare(({}), ({})), // true
]);