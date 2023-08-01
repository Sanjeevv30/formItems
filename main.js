
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
// const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

// // Set the values in the input fields
// document.getElementById('name').value = '';
// document.getElementById('email').value = '';

// // Update the user list in the UI
// const userList = document.getElementById('users');
// displayUsers(storedUsers, userList);

// // Function to display users in the UI
// function displayUsers(users, userList) {
//   userList.innerHTML = '';
//   users.forEach(function(user) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.addEventListener('click', function() {
//       deleteUser(user, userList);
//     });
//     li.appendChild(deleteBtn);

//     userList.appendChild(li);
//   });
// }

// // Function to delete a user
// function deleteUser(user, userList) {
//   // Remove user from the stored users array
//   const index = storedUsers.indexOf(user);
//   if (index !== -1) {
//     storedUsers.splice(index, 1);
//   }

//   // Update the user list in the UI
//   displayUsers(storedUsers, userList);

//   // Update the users in local storage
//   localStorage.setItem('users', JSON.stringify(storedUsers));
// }

// document.getElementById('my-form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');

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

//     storedUsers.push(user);
//     localStorage.setItem('users', JSON.stringify(storedUsers));

//     nameInput.value = '';
//     emailInput.value = '';

//     // Update the user list in the UI
//     displayUsers(storedUsers, userList);
//   }
// });

// Retrieve the name and email from local storage
// let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

// // Set the values in the input fields
// document.getElementById('name').value = '';
// document.getElementById('email').value = '';

// // Update the user list in the UI
// const userList = document.getElementById('users');
// displayUsers(storedUsers, userList);

// // Function to display users in the UI
// function displayUsers(users, userList) {
//   userList.innerHTML = '';
//   users.forEach(function(user, index) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

//     const editBtn = document.createElement('button');
//     editBtn.innerText = 'Edit';
//     editBtn.addEventListener('click', function() {
//       editUser(index, userList);
//     });
//     li.appendChild(editBtn);

//     userList.appendChild(li);
//   });
// }

// Function to edit a user
// function editUser(index, userList) {
//   const user = storedUsers[index];
//   if (user) {
//     const newName = prompt('Enter the new name:', user.name);
//     const newEmail = prompt('Enter the new email:', user.email);

//     if (newName && newEmail) {
//       user.name = newName;
//       user.email = newEmail;

//       // Update the user list in the UI
//       displayUsers(storedUsers, userList);

//       // Update the users in local storage
//       localStorage.setItem('users', JSON.stringify(storedUsers));
//     }
//   }
// }

// document.getElementById('my-form').addEventListener('submit', function(e) {
//   e.preventDefault();

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');

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

//     storedUsers.push(user);
//     localStorage.setItem('users', JSON.stringify(storedUsers));

//     nameInput.value = '';
//     emailInput.value = '';

//     // Update the user list in the UI
//     displayUsers(storedUsers, userList);
//   }
// });


let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('name').value = '';
document.getElementById('email').value = '';

const userList = document.getElementById('users');
displayUsers(storedUsers, userList);

function displayUsers(users, userList) {
  userList.innerHTML = '';

  users.forEach(function (user, index) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.className = 'btn btn-primary btn-sm ml-2';
    editBtn.addEventListener('click', function () {
      editUser(index, userList);
    });
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm ml-2';
    deleteBtn.addEventListener('click', function () {
      deleteUser(index, userList);
    });
    li.appendChild(deleteBtn);

    userList.appendChild(li);
  });
}

function editUser(index, userList) {
  const user = storedUsers[index];
  if (user) {
    const newName = prompt('Enter the new name:', user.name);
    const newEmail = prompt('Enter the new email:', user.email);

    if (newName && newEmail) {
      user.name = newName;
      user.email = newEmail;

      
      displayUsers(storedUsers, userList);

      localStorage.setItem('users', JSON.stringify(storedUsers));

      
      axios.put(`https://crudcrud.com/api/62ac8b22b56f41478d15ac6984d0d696/appoimentData/${user._id}`, user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}

function deleteUser(index, userList) {
  const user = storedUsers[index];
  if (user && user._id) {
    axios.delete(`https://crudcrud.com/api/62ac8b22b56f41478d15ac6984d0d696/appoimentData/${user._id}`)
      .then((response) => {
        storedUsers.splice(index, 1);

        
        displayUsers(storedUsers, userList);

        
        localStorage.setItem('users', JSON.stringify(storedUsers));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

document.getElementById('my-form').addEventListener('submit', function (e) {
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

    axios.post('https://crudcrud.com/api/62ac8b22b56f41478d15ac6984d0d696/appoimentData', user)
      .then((response) => {
        user._id = response.data._id;
        storedUsers.push(user);

      
        displayUsers(storedUsers, userList);

        
        localStorage.setItem('users', JSON.stringify(storedUsers));

        
        nameInput.value = '';
        emailInput.value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
