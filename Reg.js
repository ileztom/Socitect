let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let users = {};

function User(username, email, password) {
	this.username = username;
	this.email = email;
	this.password = password;
}

function createId(users) {
	return Object.keys(users).length;
}

submit.addEventListener('click', () => {
	const usernameUser = username.value;
	const emailUser = email.value;
	const passwordUser = password.value;

	const user = new User(usernameUser, emailUser, passwordUser);

	const userId = 'User' + createId(users);
	users[userId] = user;

	console.log(users);

	alert(`${usernameUser} , вы успешно прошли регистрацию.`)
})