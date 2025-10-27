// react/ticket-management.js

// Get session token
if (!localStorage.getItem("ticketapp_session")) {
  alert("Please log in first!");
  window.location.href = "./index.html";
}

// Sample tickets data
let tickets = [
  { id: 1, title: "Fix login bug", status: "open", description: "Login fails sometimes" },
  { id: 2, title: "Update landing page", status: "in_progress", description: "New hero design" }
];

let editingTicketId = null;

const form = document.getElementById("ticket-form");
const titleInput = document.getElementById("ticket-title");
const statusInput = document.getElementById("ticket-status");
const descInput = document.getElementById("ticket-desc");
const container = document.getElementById("tickets-container");

// Render tickets
function renderTickets() {
  container.innerHTML = "";
  tickets.forEach(ticket => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${ticket.title}</h3>
      <p>Status: <strong>${ticket.status}</strong></p>
      <p>${ticket.description || ""}</p>
      <button class="edit-btn" data-id="${ticket.id}">Edit</button>
      <button class="delete-btn" data-id="${ticket.id}">Delete</button>
    `;
    container.appendChild(card);
  });
  addCardListeners();
}

// Add edit/delete listeners
function addCardListeners() {
  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = parseInt(e.target.dataset.id);
      const ticket = tickets.find(t => t.id === id);
      titleInput.value = ticket.title;
      statusInput.value = ticket.status;
      descInput.value = ticket.description;
      editingTicketId = id;
    });
  });

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = parseInt(e.target.dataset.id);
      if (confirm("Are you sure you want to delete this ticket?")) {
        tickets = tickets.filter(t => t.id !== id);
        renderTickets();
      }
    });
  });
}

// Handle form submit
form.addEventListener("submit", e => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const status = statusInput.value;

  if (!title || !status) {
    alert("Title and status are required!");
    return;
  }

  if (editingTicketId) {
    // Update ticket
    const ticket = tickets.find(t => t.id === editingTicketId);
    ticket.title = title;
    ticket.status = status;
    ticket.description = descInput.value;
    editingTicketId = null;
  } else {
    // Create new ticket
    const id = tickets.length ? tickets[tickets.length - 1].id + 1 : 1;
    tickets.push({ id, title, status, description: descInput.value });
  }

  form.reset();
  renderTickets();
});

// Logout button
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("ticketapp_session");
  alert("You have been logged out!");
  window.location.href = "./index.html";
});

// Initial render
renderTickets();
const statusColors = {
  open: "green",
  in_progress: "orange",
  closed: "gray"
};
card.querySelector("strong").style.color = statusColors[ticket.status];
