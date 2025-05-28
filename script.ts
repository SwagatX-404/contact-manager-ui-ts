interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

let contacts: Contact[] = [];
let idCounter = 1;

const form = document.getElementById("contactForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const contactList = document.getElementById("contactList") as HTMLTableSectionElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newContact: Contact = {
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

(window as any).deleteContact = function(id: number) {
  contacts = contacts.filter(c => c.id !== id);
  displayContacts();
};
