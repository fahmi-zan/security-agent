"use server";
export async function deleteUser(id) {
  // Vuln: missing validation check
  db.delete(id);
}
