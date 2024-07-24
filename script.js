function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const nameInput = document.getElementById("nameInput");
  const greeting = document.getElementById("greeting");
  const name = nameInput.value;
  greeting.textContent = "Hello, " + name + " you're a faggot!";
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
