export {};

// ============================================================
// CREATE POINT — object + math functions
// Flow: x, y → point object → calculations
// ============================================================

// EASY LEVEL
function createPoint(x: number, y: number) { return { x, y }; }
function createPointWithLabel(x: number, y: number, label: string) { return { x, y, label }; }
function getDistanceFromOrigin(x: number, y: number): number { return Math.sqrt(x * x + y * y); }

console.log("E1:", createPoint(10, 20));
console.log("E2:", createPointWithLabel(5, 8, "Office"));
console.log("E3 Distance:", getDistanceFromOrigin(3, 4));

// MEDIUM LEVEL — control flow + midpoint + quadrant
function getMidPoint(x1: number, y1: number, x2: number, y2: number) {
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}

function getQuadrant(x: number, y: number): string {
  if (x === 0 || y === 0) return "On Axis";
  if (x > 0 && y > 0) return "First Quadrant";
  if (x < 0 && y > 0) return "Second Quadrant";
  if (x < 0 && y < 0) return "Third Quadrant";
  return "Fourth Quadrant";
}

function getDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function movePoint(x: number, y: number, dx: number, dy: number) {
  return { x: x + dx, y: y + dy };
}

function isInFirstQuadrant(x: number, y: number): boolean {
  return x > 0 && y > 0;
}

console.log("M1 Mid:", getMidPoint(0, 0, 10, 10));
console.log("M2:", getQuadrant(-5, 7));
console.log("M3 Dist:", getDistance(0, 0, 3, 4));
console.log("M4 Move:", movePoint(5, 5, 2, -1));
console.log("M5:", isInFirstQuadrant(3, 4));

// HIGH LEVEL — array of points, bounding box
type Point = { x: number; y: number; label?: string };

function createPoints(...coords: [number, number][]): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < coords.length; i++) {
    points.push({ x: coords[i][0], y: coords[i][1], label: `P${i + 1}` });
  }
  return points;
}

function getBoundingBox(points: Point[]): { minX: number; maxX: number; minY: number; maxY: number } {
  let minX = points[0].x, maxX = points[0].x;
  let minY = points[0].y, maxY = points[0].y;
  for (const p of points) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  return { minX, maxX, minY, maxY };
}

function totalPathLength(points: Point[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    total += getDistance(points[i - 1].x, points[i - 1].y, points[i].x, points[i].y);
  }
  return total;
}

const path = createPoints([0, 0], [3, 4], [3, 0], [0, 0]);
console.log("H1 Points:", path);
console.log("H2 Box:", getBoundingBox(path));
console.log("H3 Path length:", totalPathLength(path));
