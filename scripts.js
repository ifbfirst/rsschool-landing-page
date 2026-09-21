/*бургер меню*/

window.addEventListener('load', function()
{
	let menuBtn = document.querySelector('.menu-btn');
	let nav_menu = document.querySelector('.nav_menu_wrapper');
	let menu = document.querySelector('.menu');


	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('active_burger');
		nav_menu.classList.toggle('active_burger');
		menu.classList.toggle('active_burger');
	})

	document.addEventListener('click', function (e) {
		if (!menuBtn.contains(e.target)) {
			nav_menu.classList.remove('active_burger');
			menuBtn.classList.remove('active_burger');
			menu.classList.remove('active_burger');
		}
	})
}, false);

/*кнопка загрузки всего меню*/

window.addEventListener('load', function()
{
	let hiddenMenuCoffee = document.querySelectorAll('.hidden_menu_coffee');
	let hiddenMenuDessert = document.querySelectorAll('.hidden_menu_dessert');
	let btnLoadMenuCoffee = document.querySelector('.btn_coffee');
	let btnLoadMenuDessert = document.querySelector('.btn_dessert');
	btnLoadMenuCoffee.addEventListener('click', function () {
		for (let i = 0; i < hiddenMenuCoffee.length; i++) {
			hiddenMenuCoffee[i].classList.toggle("hidden_menu_coffee");}
			btnLoadMenuCoffee.style.display= 'none';
	})
	btnLoadMenuDessert.addEventListener('click', function () {
		for (let i = 0; i < hiddenMenuDessert.length; i++) {
			hiddenMenuDessert[i].classList.toggle("hidden_menu_dessert");}
			btnLoadMenuDessert.style.display= 'none';
	})

}, false);