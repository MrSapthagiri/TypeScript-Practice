export {};

// ============================================================
// ASYNC FUNCTION — Promise-based flow
// Flow: call async fn → await Promise → then handle result
// Shape: async function name(): Promise<type> { return value; }
// ============================================================

// EASY LEVEL — simple async returns
async function fetchUser(): Promise<string> { return "User loaded"; }
async function fetchOrders(): Promise<string> { return "Orders loaded"; }
async function fetchProducts(): Promise<string> { return "Products loaded"; }
async function fetchReports(): Promise<string> { return "Reports loaded"; }
async function fetchSettings(): Promise<string> { return "Settings loaded"; }

fetchUser().then((data) => console.log("E1:", data));
fetchOrders().then((data) => console.log("E2:", data));
fetchProducts().then((data) => console.log("E3:", data));
fetchReports().then((data) => console.log("E4:", data));
fetchSettings().then((data) => console.log("E5:", data));

// MEDIUM LEVEL — async + control flow simulation
async function fetchWithDelay(label: string, ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${label} ready after ${ms}ms`), ms);
  });
}

async function fetchIfOnline(isOnline: boolean): Promise<string> {
  if (!isOnline) return "Offline — no data";
  return "Online — data synced";
}

async function fetchScores(): Promise<number[]> {
  return [85, 72, 91, 60];
}

async function getPassCountAsync(): Promise<number> {
  const scores = await fetchScores();
  let count = 0;
  for (const s of scores) {
    if (s >= 50) count++;
  }
  return count;
}

async function fetchUserById(id: number): Promise<{ id: number; name: string } | string> {
  if (id <= 0) return "Invalid ID";
  return { id, name: `User_${id}` };
}

// Run medium examples
(async () => {
  console.log("M1:", await fetchWithDelay("App", 100));
  console.log("M2:", await fetchIfOnline(true), await fetchIfOnline(false));
  console.log("M3 Pass count:", await getPassCountAsync());
  console.log("M4:", await fetchUserById(5), await fetchUserById(-1));
})();

// HIGH LEVEL — async pipeline with multiple steps
type ApiUser = { id: number; name: string; role: string };

async function mockApiCall<T>(data: T, delay: number = 50): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

async function loadUser(id: number): Promise<ApiUser> {
  return mockApiCall({ id, name: "Anu", role: "QA" });
}

async function loadPermissions(role: string): Promise<string[]> {
  const map: Record<string, string[]> = {
    QA: ["read", "test"],
    Dev: ["read", "write", "deploy"],
    Admin: ["read", "write", "delete", "admin"],
  };
  return mockApiCall(map[role] ?? ["read"]);
}

async function buildUserDashboard(userId: number): Promise<{ user: ApiUser; permissions: string[] }> {
  const user = await loadUser(userId);
  const permissions = await loadPermissions(user.role);
  return { user, permissions };
}

async function loadAllUsers(ids: number[]): Promise<ApiUser[]> {
  const users: ApiUser[] = [];
  for (const id of ids) {
    users.push(await loadUser(id));
  }
  return users;
}

(async () => {
  console.log("H1 Dashboard:", await buildUserDashboard(1));
  console.log("H2 Users:", await loadAllUsers([1, 2, 3]));
})();
