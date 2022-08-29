
function openWindowOne(){
    const element = document.getElementById('FIRST');
    if(element.className === "folder-off"){
        element.className = "first-folder-on";
    } else {
        element.className = "folder-off";
    }
}

function openWindowTwo(){
    const element = document.getElementById('SECOND');
    if(element.className === "folder-off"){
        element.className = "second-folder-on";
    } else {
        element.className = "folder-off";
    }
}

function openWindowThree(){
    const element = document.getElementById('THIRD');
    if(element.className === "folder-off"){
        element.className = "third-folder-on";
    } else {
        element.className = "folder-off";
    }
}

function openWindowFour(){
    const element = document.getElementById('FOURTH');
    if(element.className === "folder-off"){
        element.className = "fourth-folder-on";
    } else {
        element.className = "folder-off";
    }
}

let getNavi = document.getElementById('navigation');
let webDate = document.createElement('span');
webDate.innerHTML = new Date();
getNavi.appendChild(webDate);

document.getElementById("new-user").addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;
    console.log(firstName, lastName, email, phoneNumber);
})

function noDate(size){
    if(size.matches){
        webDate.innerHTML = "";
    }
}

let iPhoneSize = window.matchMedia("(max-width: 375px");
noDate(iPhoneSize);