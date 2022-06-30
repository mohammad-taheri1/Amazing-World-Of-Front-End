// localStorage
// localStorage.setItem("name", "ali");
// alert(localStorage.getItem('name'));
// localStorage.removeItem('name');


// sessionStorage
// sessionStorage.setItem('name2', 'mamad');
// alert(sessionStorage.getItem('name2'));
// sessionStorage.removeItem('name2');


// cookie
document.cookie = 'name= Zahra; expires='+ new Date(2023, 1, 1).toUTCString();
document.cookie = 'lastName= Moosavi; expires='+ new Date(2023, 1, 1).toUTCString();

console.log(document.cookie)