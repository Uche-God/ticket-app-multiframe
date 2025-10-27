if (!localStorage.getItem("ticketapp_session")) {
  alert("Please log in first!");
  window.location.href = "./auth.html";
}
// react/dashboard.js

// Simulated ticket data
let tickets = [
  { title: "Fix login bug", status: "open" },
  { title: "Update landing page", status: "closed" },
  { title: "Add dashboard stats", status: "in_progress" },
  { title: "Test ticket CRUD", status: "open" }
];

// Function to update dashboard stats
function updateStats() {
  const total = tickets.length;
  const open = tickets.filter(t => t.status === "open").length;
  const resolved = tickets.filter(t => t.status === "closed").length;

  document.getElementById("total-tickets").innerText = total;
  document.getElementById("open-tickets").innerText = open;
  document.getElementById("resolved-tickets").innerText = resolved;
}

// Logout function
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("ticketapp_session");
  alert("You have been logged out!");
  window.location.href = "./index.html"; // Redirect to landing page
});

// Initialize stats on page load
window.onload = updateStats;
