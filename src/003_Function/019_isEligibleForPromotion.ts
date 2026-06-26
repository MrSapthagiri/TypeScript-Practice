export {};

// ============================================================
// ELIGIBILITY CHECK — boolean functions + control flow
// Flow: criteria in → if/switch check → true/false
// ============================================================

// EASY LEVEL
function isEligibleForPromotion(experience: number): boolean { return experience >= 5; }
function isEligibleForBonus(salary: number): boolean { return salary > 40000; }
function isEligibleForTraining(experience: number): boolean { return experience < 2; }
function isEligibleForLeadRole(experience: number): boolean { return experience >= 8; }
function isEligibleForRemoteWork(location: string): boolean { return location !== "Chennai"; }

console.log("E1 Promotion:", isEligibleForPromotion(6));
console.log("E2 Bonus:", isEligibleForBonus(50000));
console.log("E3 Training:", isEligibleForTraining(1));
console.log("E4 Lead:", isEligibleForLeadRole(9));
console.log("E5 Remote:", isEligibleForRemoteWork("Bangalore"));

// MEDIUM LEVEL — multiple conditions
function isEligibleForIncrement(experience: number, rating: number): boolean {
  if (experience >= 2 && rating >= 3) return true;
  return false;
}

function isEligibleForLoan(salary: number, creditScore: number): boolean {
  return salary >= 30000 && creditScore >= 650;
}

function checkAgeGroup(age: number): string {
  switch (true) {
    case age < 18: return "Minor";
    case age < 60: return "Adult";
    default: return "Senior";
  }
}

function canAccess(role: string, level: number): boolean {
  if (role === "Admin") return true;
  if (role === "Manager" && level >= 2) return true;
  if (role === "User" && level >= 1) return false;
  return false;
}

function allEligible(...flags: boolean[]): boolean {
  for (const f of flags) {
    if (!f) return false;
  }
  return true;
}

console.log("M1 Increment:", isEligibleForIncrement(3, 4));
console.log("M2 Loan:", isEligibleForLoan(50000, 700));
console.log("M3 Age:", checkAgeGroup(25));
console.log("M4 Access:", canAccess("Manager", 2));
console.log("M5 All:", allEligible(true, true, false));

// HIGH LEVEL — employee eligibility report
type StaffMember = { name: string; experience: number; salary: number; rating: number; location: string };

function getEligibilityReport(emp: StaffMember): Record<string, boolean> {
  return {
    promotion: isEligibleForPromotion(emp.experience),
    bonus: isEligibleForBonus(emp.salary),
    training: isEligibleForTraining(emp.experience),
    lead: isEligibleForLeadRole(emp.experience),
    remote: isEligibleForRemoteWork(emp.location),
    increment: isEligibleForIncrement(emp.experience, emp.rating),
  };
}

function countEligible(list: StaffMember[], check: (e: StaffMember) => boolean): number {
  let count = 0;
  for (const emp of list) {
    if (check(emp)) count++;
  }
  return count;
}

const staff: StaffMember[] = [
  { name: "Anu", experience: 6, salary: 55000, rating: 4, location: "Bangalore" },
  { name: "Ben", experience: 1, salary: 35000, rating: 3, location: "Chennai" },
  { name: "Cara", experience: 9, salary: 80000, rating: 5, location: "Hyderabad" },
];

console.log("H1 Report:", getEligibilityReport(staff[0]));
console.log("H2 Promo count:", countEligible(staff, (e) => isEligibleForPromotion(e.experience)));
