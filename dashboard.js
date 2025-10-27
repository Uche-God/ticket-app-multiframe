if (!localStorage.getItem("ticketapp_session")) {
  alert("Please log in first!");
  window.location.href = "./auth.html";
}

const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");

document.getElementById("total-tickets").textContent = tickets.length;
document.getElementById("open-tickets").textContent = tickets.filter(t => t.status === "open").length;
document.getElementById("closed-tickets").textContent = tickets.filter(t => t.status === "closed").length;

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("ticketapp_session");
  alert("Logged out!");
  window.location.href = "./auth.html";
});
