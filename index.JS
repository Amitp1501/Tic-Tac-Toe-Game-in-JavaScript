console.log("Hellow");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".massage-container");
let msg = document.querySelector("#massage");

let turnO = true; // player X  ,    PlayerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// REST Game

const restGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // player O
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      // player X
      box.innerText = "X";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
// any winner than all button disable
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratutions , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
//  checkWinner Code
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let positionval1 = boxes[pattern[0]].innerText;
    let positionval2 = boxes[pattern[1]].innerText;
    let positionval3 = boxes[pattern[2]].innerText;

    if (positionval1 != "" && positionval2 != "" && positionval3 != "") {
      if (positionval1 === positionval2 && positionval2 === positionval3) {
        //  Show Winner
        showWinner(positionval1);
      }
    }
  }
};


newGameBtn.addEventListener("click",restGame);
resetBtn.addEventListener("click",restGame);

