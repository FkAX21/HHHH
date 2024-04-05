// JAVASCRIPT EVENT LISTENERS

// var heading = Document.getElementById("test");
// console.log(heading);

// var ListItem = document.getElementById("ListItem");
// console.log(ListItem);

//  Greet

// declare the function
// function greet() {
//   let name = prompt(`Enter your name`);
//   alert(`Nice to meet you, ${name}`);
// }

// greet();
// greet();
// greet();

// document.getElementById("btn1").addEventListener("click", greet);
// function fillin() {
//     let name = prompt(`Enter your name`);
//     alert(`N, ${name}`);
//   }
// Eventfunction
// function changeToDragon() {
//   document.getElementById("test").innerHTML = "All About Dragon";
//   document.getElementById("intro-p").innerHTML =
//     "Dragons would make the best pets. Let me tell you why";

//   // Change list item 1 to say "smaug"
//   document.getElementById("list1").innerHTML = "Smaug";
// }

// // Ex.
// document.getElementById("btn3").addEventListener("click", changestyle);

// // event function
// function changeStyle() {
//   document.getElementById("list").style.fontFamily = "Papyrus";
//   document.getElementById("the-body").style.backgroundColor = "lightgreen";
// }
// btn4
document.getElementById("btn4").addEventListener("click", random);
function random() {
  alert(Math.random);
}
// btn5
document.getElementById("btn5").addEventListener("click", diffDragon);
function diffDragon() {
  document.getElementById("btn5").innerHTML = "Draco";
  document.getElementById("btn5").innerHTML = "Mushu";
  document.getElementById("btn5").innerHTML = "Falkor";
  document.getElementById("btn5").innerHTML = "Smaug";
}
// Btn6
document.getElementById("btn6").addEventListener("click", colorchange);
function colorchange() {
  document.getElementById("the-body").styleborder = "2px solid green";
  document.getElementById("the-body").stylecolor = "#32612D";
}

//btn1

document.getElementById("s1").addEventListener("click", phrase1);

function phrase1() {
  alert("disguise");
}
//btn2
document.getElementById("s2").addEventListener("click", phrase2);

function phrase2() {
  alert("never");
}
// btn3
document.getElementById("s3").addEventListener("click", phrase3);
function phrase3() {
  alert("the doubt");
}
// btn4
document.getElementById("s4").addEventListener("click", phrase4);

function phrase4() {
  alert("having fun");
}
// btn5
document.getElementById("s5").addEventListener("click", phrase5);

function phrase5() {
  alert("we come to it");
}
