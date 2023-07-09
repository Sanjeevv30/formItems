
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';const btn = document.querySelector('.btn');
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.value);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
//   });

// // Get the <ul> element by its ID
// const itemsList = document.getElementById('users');

// // Get all the <li> elements with the class "item"
// const liItems = document.querySelectorAll('.items .item');

// // Add event listeners to each <li> element
// liItems.forEach((li) => {
//   // Click event
//   li.addEventListener('click', () => {
//     console.log('Clicked:', li.textContent);
//   });

//   // Mouseover event
//   li.addEventListener('mouseover', () => {
//     li.style.backgroundColor = 'red';
//   });

//   // Mouseout event
//   li.addEventListener('mouseout', () => {
//     li.style.backgroundColor = '';
//   });
// });
// //  const btn = btn.addEventListener('click', e => {
// //     e.preventDefault();
// //     console.log(e.target.className);
// //     document.getElementById('my-form').style.background = '#ccc';
// //     document.querySelector('body').classList.add('bg-dark');
// //     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// //   });
// //   

// const form = document.getElementById('my-form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const msg = document.querySelector('.msg');
// const userList = document.getElementById('users');

// // Add a submit event listener to the form
// form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   // Get the input values entered by the user
//   const name = nameInput.value;
//   const email = emailInput.value;

//   if (name === '' || email === '') {
//     // Display an error message
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => {
//       msg.classList.remove('error');
//       msg.innerHTML = '';
//     }, 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${name}: ${email}`));

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';

//     // Store the details in local storage
//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//     // localStorage.getItem('name', name);
//     // localStorage.getItem('email', email);
//   }
// }


// document.getElementById('my-form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const userList = document.getElementById('users');

//   const name = nameInput.value;
//   const email = emailInput.value;

//   if (name === '' || email === '') {
//     const msg = document.querySelector('.msg');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     setTimeout(() => {
//       msg.classList.remove('error');
//       msg.innerHTML = '';
//     }, 3000);
//   } else {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${name}: ${email}`));
//     userList.appendChild(li);

//     nameInput.value = '';
//     emailInput.value = '';

//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//   }
// });

// document.getElementById('my-form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const userList = document.getElementById('users');

//   const name = nameInput.value;
//   const email = emailInput.value;

//   if (name === '' || email === '') {
//     const msg = document.querySelector('.msg');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     setTimeout(() => {
//       msg.classList.remove('error');
//       msg.innerHTML = '';
//     }, 3000);
//   } else {
//     const user = {
//       name: name,
//       email: email
//     };

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
//     userList.appendChild(li);

//     nameInput.value = '';
//     emailInput.value = '';

//     // Convert the user object to a JSON string before storing in local storage
//     localStorage.setItem('user', JSON.stringify(user));
//   }
// });

// Retrieve the name and email from local storage
// const storedName = localStorage.getItem('name');
// const storedEmail = localStorage.getItem('email');

// // Set the values in the input fields
// document.getElementById('name').value = storedName || '';
// document.getElementById('email').value = storedEmail || '';

// document.getElementById('my-form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const userList = document.getElementById('users');

//   const name = nameInput.value;
//   const email = emailInput.value;

//   if (name === '' || email === '') {
//     const msg = document.querySelector('.msg');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     setTimeout(() => {
//       msg.classList.remove('error');
//       msg.innerHTML = '';
//     }, 3000);
//   } else {
//     const user = {
//       name: name,
//       email: email
//     };

//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));
//     userList.appendChild(li);

//     nameInput.value = '';
//     emailInput.value = '';

//     // Store the user details in local storage
//     localStorage.setItem('name', name);
//     localStorage.setItem('email', email);
//   }
// });

// Retrieve the name and email from local storage
const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

// Set the values in the input fields
document.getElementById('name').value = '';
document.getElementById('email').value = '';

// Update the user list in the UI
const userList = document.getElementById('users');
displayUsers(storedUsers, userList);

// Function to display users in the UI
function displayUsers(users, userList) {
  userList.innerHTML = '';
  users.forEach(function(user) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
      deleteUser(user, userList);
    });
    li.appendChild(deleteBtn);

    userList.appendChild(li);
  });
}

// Function to delete a user
function deleteUser(user, userList) {
  // Remove user from the stored users array
  const index = storedUsers.indexOf(user);
  if (index !== -1) {
    storedUsers.splice(index, 1);
  }

  // Update the user list in the UI
  displayUsers(storedUsers, userList);

  // Update the users in local storage
  localStorage.setItem('users', JSON.stringify(storedUsers));
}

document.getElementById('my-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const name = nameInput.value;
  const email = emailInput.value;

  if (name === '' || email === '') {
    const msg = document.querySelector('.msg');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => {
      msg.classList.remove('error');
      msg.innerHTML = '';
    }, 3000);
  } else {
    const user = {
      name: name,
      email: email
    };

    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    nameInput.value = '';
    emailInput.value = '';

    // Update the user list in the UI
    displayUsers(storedUsers, userList);
  }
});

