const allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "|",
  "/",
  "<",
  ">",
  "~",
];

const randomText = document.getElementsByClassName("random-text");
const generateBtn = document.getElementById("btn-gen");

//Length of Array
const ARRLENGTH = allCharacters.length - 1;

//Event listener for generate button
generateBtn.addEventListener("click", assignPassword);

//Event Listener to Copy Text
for (let i = 0; i < randomText.length; i++) {
  randomText[i].addEventListener("click", copyText);
}

//Generate a random Password
function generatePassword() {
  let emptyStr = "";

  for (let i = 0; i <= 7; i++) {
    emptyStr += allCharacters[Math.round(Math.random() * ARRLENGTH)];
  }

  return emptyStr;
}

//Assign Passwords to all Inputs
function assignPassword() {
  for (let i = 0; i < randomText.length; i++) {
    const passwordText = generatePassword();
    randomText[i].value = passwordText;
  }
}

function copyText(event) {
  /* Select the text field */
  event.target.select();
  event.target.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(event.target.value);

  /* Alert the copied text */
  alert("Text Copied: " + event.target.value);
}
