var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firebox-icon.jpg'){
		myImage.setAttribute('src','images/firebox-icon1.jpg');
	}else{
		myImage.setAttribute('src','images/firebox-icon.jpg');
	}
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please Enter Your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML= 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML ='Mozilla is cool.'+ storedName;
}

myButton.onclick = function() {
	setUserName();
}
/* Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firebox-icon.jpg') {
      myImage.setAttribute ('src','images/firebox-icon1.jpg');
	} else {
	  myImage.setAttribute ('src','images/firebox-icon.jpg');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}*/