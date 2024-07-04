//js untuk popup promt//
document.addEventListener('DOMContentLoaded', function(){
    showPopup();
}); 

function showPopup(){
    document.getElementById('popup').style.display = 'flex';
}

function submitName(){
    const nameInput = document.getElementById('nameInput').value;

    if(nameInput.trim()===""){
        alert("Nama tidak boleh kosong!");
    } else{
        document.getElementById('popup').style.display = 'none';
        document.getElementById('welcomeMessage').innerHTML = 'Hello ' + nameInput + ', Welcome to ADOR';
    }

}

//js untuk navbar responsive//
const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navLink = document.querySelectorAll('.nav-link')

toggleMenu.addEventListener('click', function(){
    console.log('Toggle menu clicked!');
    navbar.classList.toggle('show');
})

for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', function(){
        console.log('navlink clicked!');
        navbar.classList.toggle('show');
    })
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

//js untuk autoslide//
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + (counter % 5 + 1)).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 5000);

//js untuk portofolio//
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

nextBtn.onclick = function() {
    moveSlider('next')
}

prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true})
}
//js untuk validation form//
function validateForm() {
    const fullName = document.querySelector('#full-name').value;
    const birthDate = document.querySelector('#birth-date').value;
    const gender = document.querySelector('input[name="gender"]:checked').getAttribute('value');
    const messages = document.querySelector('#messages').value;
  
    if (fullName === "" || birthDate === "" || gender === "" || messages === "") {
      alert("Tidak boleh ada yang kosong!!");
      return false;
    }
  
    const currentTime = new Date();
    const timeString = currentTime.toUTCString();
  
    setSenderUi(fullName, birthDate, gender, messages, timeString);
  
    return false;
  }

function setSenderUi(name, birthDate, gender, messages, timeString) {
    document.getElementById("sender-sent-time").innerHTML = timeString;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}
