// 1. Create a named function to create a point with x and y.
function createPoint(x: number, y: number) {
    return { x, y };
}
console.log(createPoint(10, 20));

// 2. Create a named function to create a point with label.
function createPointWithLabel(x: number, y: number, label: string) {
    return { x, y, label };
}
console.log(createPointWithLabel(5, 8, "Office"));

// 3. Create a named function to find distance from origin.
function getDistanceFromOrigin(x: number, y: number): number {
    return Math.sqrt(x * x + y * y);
}
console.log("Distance:", getDistanceFromOrigin(3, 4));

// 4. Create a named function to find midpoint between two points.
function getMidPoint(x1: number, y1: number, x2: number, y2: number) {
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}
console.log("Midpoint:", getMidPoint(0, 0, 10, 10));

// 5. Create a named function to find quadrant of a point.
function getQuadrant(x: number, y: number): string {
    if (x > 0 && y > 0) return "First Quadrant";
    if (x < 0 && y > 0) return "Second Quadrant";
    if (x < 0 && y < 0) return "Third Quadrant";
    return "Fourth Quadrant";
}
console.log("Quadrant:", getQuadrant(-5, 7));
