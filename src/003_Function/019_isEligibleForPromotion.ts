// 1. Create a named function to check promotion eligibility by experience.
function isEligibleForPromotion(experience: number): boolean {
    return experience >= 5;
}
console.log("Promotion (6 yrs):", isEligibleForPromotion(6));

// 2. Create a named function to check bonus eligibility by salary.
function isEligibleForBonus(salary: number): boolean {
    return salary > 40000;
}
console.log("Bonus (50000):", isEligibleForBonus(50000));

// 3. Create a named function to check training eligibility by experience.
function isEligibleForTraining(experience: number): boolean {
    return experience < 2;
}
console.log("Training (1 yr):", isEligibleForTraining(1));

// 4. Create a named function to check lead role eligibility by experience.
function isEligibleForLeadRole(experience: number): boolean {
    return experience >= 8;
}
console.log("Lead role (9 yrs):", isEligibleForLeadRole(9));

// 5. Create a named function to check remote work eligibility by location.
function isEligibleForRemoteWork(location: string): boolean {
    return location !== "Chennai";
}
console.log("Remote (Bangalore):", isEligibleForRemoteWork("Bangalore"));
