function handleLogin(event) {
  event.preventDefault();

  const username = document.querySelectorAll('.input-group input')[0].value;
  const password = document.querySelectorAll('.input-group input')[1].value;

  if (username && password) {
    alert(`Bienvenue ${username} 😎`);
    // Tu peux ici rediriger vers ton site ou autre page
  } else {
    alert('Veuillez remplir tous les champs');
  }
}