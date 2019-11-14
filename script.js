
function loadchat() {
	let tamanho = document.getElementById('chat').style.height;
	if (tamanho === '400px') {
		let cleaner = document.getElementById('chat')
		document.getElementById('chat').style.height = '30px';
	} else {
		document.getElementById('chat').style.height = '400px';
		document.getElementById('chat').style.transition = '.5s';
	}
}

function sendMessage() {
	let input = document.getElementById('inputText');
	input.addEventListener('keydown', function (e) {
		var key = e.which || e.keyCode;
		if (key == 13) { // codigo da tecla enter
			document.getElementById('dialogue').value = input.value
			//document.getElementById('inputText').value = '';
		}
	});
}

function butSendMessage() {
	document.getElementById('dialogue').value = document.getElementById('inputText').value
}

$(".gallery").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery: {
		enabled: true
	}
});

function menuOnOff() {
	let menuMob = document.getElementsByClassName('mobile-menu');
	if (menuMob[0].clientWidth == 0) {
		document.getElementById('mob-close').style.transform = 'rotate(90deg)';
		document.getElementById('mob-close').src = './icons/close-button.png';
		//document.getElementById('mob-close').style.paddingRight = '10px';
		menuMob[0].style.width = '100%';
		let opList = document.getElementsByClassName('op');
		for(let i=0;i<opList.length;i++){
			opList[i].style.display = 'block';
		}
	}else{
		document.getElementById('mob-close').style.transform = 'rotate(180deg)';
		document.getElementById('mob-close').src = './icons/menu-button.png';
		//document.getElementById('mob-close').style.paddingleft = '10px';
		menuMob[0].style.width = '0';
		let opList = document.getElementsByClassName('op');
		for(let i=0;i<opList.length;i++){
			opList[i].style.display = 'none';
		}
	}
}
