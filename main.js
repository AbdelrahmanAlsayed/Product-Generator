let header = document.createElement("div");
header.className = "header";

document.body.appendChild(header);
document.body.style.margin = "0";

let logo = document.createElement("div");
logo.className = "logo";

let logoText = document.createTextNode("Abdelrahman");
logo.appendChild(logoText);

header.prepend(logo);

let globalNav = document.createElement("ul");

let homeLi = document.createElement("li");
let homeText = document.createTextNode("Home");
homeLi.appendChild(homeText);

let aboutLi = document.createElement("li");
let aboutText = document.createTextNode("About");
aboutLi.appendChild(aboutText);

let serviceLi = document.createElement("li");
let serviceText = document.createTextNode("Service");
serviceLi.appendChild(serviceText);

let contactLi = document.createElement("li");
let contactText = document.createTextNode("Contact");
contactLi.appendChild(contactText);

globalNav.appendChild(homeLi);
globalNav.appendChild(aboutLi);
globalNav.appendChild(serviceLi);
globalNav.appendChild(contactLi);

header.append(globalNav);

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.boxShadow = "0 4px 6px rgba(10, 0, 0, 0.1) ";
header.style.padding = "8px 40px"

logo.style.fontSize = "24px";
logo.style.fontWeight = "bold";
logo.style.color = "#23a96e";
logo.style.letterSpacing = "1px";

globalNav.style.display = "flex";
globalNav.style.gap = "30px";

let menuItems = document.querySelectorAll("ul li");

menuItems.forEach(function (ele) {
    ele.style.listStyle = "none";
    ele.style.cursor = "pointer";
    ele.style.fontSize = "18px";

    ele.addEventListener('mouseenter', function () {
        ele.style.color = "#23a96e";
    });
    ele.addEventListener('mouseleave', function () {
        ele.style.color = 'black';
    });
});

let form = document.createElement("form");

let input1 = document.createElement("input");
input1.type = "texts";
input1.name = "elements";
input1.className = "input";
input1.placeholder = "What is the Product Name ?";

let input2 = document.createElement("input");
input2.type = "number";
input2.name = "elements";
input2.className = "input";
input2.placeholder = "How many products do you want ?";

let input3 = document.createElement("input");
input3.type = "submit";
input3.name = "Create";
input3.className = "submit";
input3.value = "Create";

let div4 = document.createElement("div");
div4.className = "results";

form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);

document.body.appendChild(form);

form.style.display = "flex";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.flexDirection = "column";
form.style.gap = "30px";
form.style.height = "calc(100vh - 132px)";

let inputs = document.querySelectorAll("form input");

inputs.forEach(function (ele) {
    ele.style.boxSizing = "border-box";
    ele.style.width = "300px";
    ele.style.height = "48px";
    ele.style.borderRadius = "8px";
    ele.style.paddingLeft = "10px";
    ele.style.paddingRight = "10px";
    ele.style.outline = "none";
    ele.style.border = "1px solid #23a96e";
    ele.onfocus = function() {
        ele.style.outline = "none"; 
    };
});

input1.style.backgroundColor = "rgb(241 233 224 / 55%)";
input2.style.backgroundColor = "rgb(241 233 224 / 55%)";

input3.style.backgroundColor = "#23a96e";
input3.style.color = "white";
input3.style.fontSize = "18px";
input3.style.cursor = "pointer";

input3.addEventListener('mouseenter', function () {
    input3.style.backgroundColor = "rgb(64, 142, 145)";
});
input3.addEventListener('mouseleave', function () {
    input3.style.backgroundColor = "#23a96e";
});

form.onsubmit = function (el) {
        el.preventDefault();

        document.querySelectorAll(".box").forEach(function (b) {
            b.remove();
        });
        
        document.querySelectorAll(".box").forEach(function (b){
            b.remove();
        });

        addItems();
};

div4.style.display = "grid";
div4.style.gridTemplateColumns = "repeat(4, 1fr)";
div4.style.textAlign = "center";
div4.style.backgroundColor = "#ececec";
div4.style.gap = "10px";

document.body.appendChild(div4);

function addItems() {
    let number = 1;
    for (let i = 1; i <= input2.value; i++) {
        let myEl = document.createElement("div");
        let myNumber = document.createElement("span");
        let myText = document.createTextNode(input1.value);

        if (input1.value.length > 12) {
            alert("The product name does not exist. Please enter a shorter and proper one.");
            return;
        }

        myEl.className = "box";
        myEl.title = "Element";
        myEl.id = `id-${i}`;

        myNumber.textContent = `${number++}`;
        myNumber.className = "number"; 
        myEl.appendChild(myNumber);

        myEl.appendChild(document.createElement("br"));
        myEl.appendChild(myText);

        div4.appendChild(myEl);

        if(i === input2.value) {
            number = 1;
        }
    }

    let boxes = document.querySelectorAll(".box");

    boxes.forEach(function(box) {
        box.style.backgroundColor = "white";
        box.style.padding = "10px";
        box.style.margin = "15px";
        box.style.borderRadius = "8px";
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        div4.style.display = "grid";
        div4.style.gridTemplateColumns = "repeat(2, 1fr)";

        boxes.forEach(function(box) {
            box.style.backgroundColor = "white";
            box.style.padding = "10px";
            box.style.margin = "10px";
            box.style.borderRadius = "6px";
        });
    }

    let numbers = document.querySelectorAll(".number"); 
    numbers.forEach(function (num) {
        num.style.fontSize = "20px"; 
    });
};

let footer = document.createElement("div");
let fText = document.createTextNode("© 2023 - ");

footer.appendChild(fText);
document.body.appendChild(footer);

footer.style.background = "#23a96e";
footer.style.textAlign = "center";
footer.style.color = "white";
footer.style.padding = "20px";
footer.style.fontSize = "20px"; 

let myLinkedIn = document.createElement("a");
myLinkedIn.href = "https://www.linkedin.com/in/abdelrahman-alsayed-b312311a0/";
let myName = document.createTextNode("Abdelrahman Alsayed");

myLinkedIn.appendChild(myName);
footer.appendChild(myLinkedIn);

myLinkedIn.style.textDecoration = "none";
myLinkedIn.style.color = "white";
myLinkedIn.style.fontWeight = "bold";
myLinkedIn.style.letterSpacing = ".5px";

if (window.matchMedia("(max-width: 768px)").matches) {
    header.style.flexDirection = "column";
    header.style.paddingLeft = "5px";
    header.style.paddingRight = "25px";

    globalNav.style.textAlign = "center";
    globalNav.style.paddingLeft = "0";

    form.style.height = "calc(100vh - 156px)";

    menuItems.forEach(function (ele) {
        ele.style.textAlign = "center";
        ele.style.fontSize = "16px";
    })
}

// That's it,  DONE !!