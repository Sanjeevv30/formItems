
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


document.getElementById('my-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const userList = document.getElementById('users');

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
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name}: ${email}`));
    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }
});




