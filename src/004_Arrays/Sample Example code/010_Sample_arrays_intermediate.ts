// Iterating & Common Methods

export function intermediateDemo(): void {
  let skills: string[] = ["Selenium", "Playwright", "Cypress", "API"];

  console.log("\n--- Iteration ---");
  for (let skill of skills) {
    console.log("Skill:", skill);
  }

  skills.forEach((skill, i) => console.log(`forEach [${i}]: ${skill}`));

  console.log("\n--- Methods ---");
  skills.push("Jest");
  skills.pop();
  skills.shift();
  skills.unshift("Mocha");

  console.log("Updated Skills:", skills);
  console.log("Includes Cypress?", skills.includes("Cypress"));
  console.log("Index of API:", skills.indexOf("API"));
}
