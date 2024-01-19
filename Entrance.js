let username = document.querySelector('#username');
let password = document.querySelector('#password');

let users = {};

function User(username, password) {
	this.username = username;
	this.password = password;
}

function createId(users) {
	return Object.keys(users).length;
}

submit.addEventListener('click', () => {
	const usernameUser = username.value;
	const passwordUser = password.value;

	const user = new User(usernameUser, passwordUser);

	const userId = 'User' + createId(users);
	users[userId] = user;

	console.log(users);

	alert(`${usernameUser} , вы успешно вошли в аккаунт.`)
})