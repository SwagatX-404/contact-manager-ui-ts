"use strict";
let contacts = [];
let idCounter = 1;
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const contactList = document.getElementById("contactList");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newContact = {
        id: idCounter++,
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };
    contacts.push(newContact);
    displayContacts();
    form.reset();
});
function displayContacts() {
    contactList.innerHTML = "";
    contacts.forEach(contact => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteContact(${contact.id})">Delete</button></td>
    `;
        contactList.appendChild(row);
    });
}
window.deleteContact = function (id) {
    contacts = contacts.filter(c => c.id !== id);
    displayContacts();
};
