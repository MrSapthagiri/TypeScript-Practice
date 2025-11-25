type Vehicle = {
  id: number;
  driver: string;
  route: { from: string; to: string; distanceKm: number; fuelUsed: number }[];
};

let fleet: Vehicle[] = [
  {
    id: 1,
    driver: "Alice",
    route: [
      { from: "Delhi", to: "Jaipur", distanceKm: 280, fuelUsed: 25 },
      { from: "Jaipur", to: "Udaipur", distanceKm: 400, fuelUsed: 35 }
    ]
  },
  {
    id: 2,
    driver: "Bob",
    route: [
      { from: "Mumbai", to: "Pune", distanceKm: 150, fuelUsed: 20 },
      { from: "Pune", to: "Nagpur", distanceKm: 750, fuelUsed: 60 }
    ]
  }
];

// Efficiency: km per liter
let efficiencyReport = fleet.map(v => {
  let totalDist = v.route.reduce((d, r) => d + r.distanceKm, 0);
  let totalFuel = v.route.reduce((f, r) => f + r.fuelUsed, 0);
  return { driver: v.driver, efficiency: (totalDist / totalFuel).toFixed(2) };
});

console.log("=== Fleet Efficiency Report ===");
console.table(efficiencyReport);
