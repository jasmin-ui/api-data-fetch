const userContainer = document.getElementById("users");
const errorDiv = document.getElementById("error");

function fetchUsers() {
  errorDiv.textContent = "";
  userContainer.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      errorDiv.textContent = `Failed to fetch users. ${error.message}`;
    });
}

// Initial load
fetchUsers();