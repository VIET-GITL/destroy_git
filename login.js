console.log('login.js');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

console.log("login")

console.log('Viet da sua file login.js');
