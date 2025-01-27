const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');
let users = [];

userForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const edad = parseInt(document.getElementById('edad').value, 10);

  if (!nombre || !correo || !edad || edad <= 0 || !/\S+@\S+\.\S+/.test(correo)) {
    alert('Datos inválidos');
    return;
  }

  const newUser = { nombre, correo, edad };
  users.push(newUser);

  const userItem = document.createElement('li');
  userItem.textContent = `${nombre} - ${correo} - ${edad}`;
  userList.appendChild(userItem);

  userForm.reset();
});
