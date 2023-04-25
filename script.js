const gameboard = (() => {
  let array = [[], [], []];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", "field");
      div.setAttribute("id", j);
      div.onclick = () => {
        if (div.hasAttribute("field")) {
        } else {
          div.setAttribute("field", currentTurn.symbol);
          div.classList.add(currentTurn.symbol);
          currentTurn.fields[i][j] = currentTurn.symbol;
          check();
          if (currentTurn === player1) {
            currentTurn = player2;
          } else {
            currentTurn = player1;
          }
        }
      };
      array[i].push(div);
    }
  }

  const render = () => {
    let header = document.createElement("div");
    header.setAttribute("class", "header");
    document.body.appendChild(header);
    let player1Title = document.createElement("div");
    player1Title.setAttribute("class", "player-title");
    player1Title.textContent = player1.name + " : " + player1.symbol;
    header.appendChild(player1Title);
    let player2Title = document.createElement("div");
    player2Title.setAttribute("class", "player-title");
    player2Title.textContent = player2.name + " : " + player2.symbol;
    header.appendChild(player2Title);
    array.forEach((subArray) => {
      let line = document.createElement("div");
      line.setAttribute("class", "line");
      document.body.appendChild(line);
      for (let i = 0; i < subArray.length; i++) {
        line.appendChild(subArray[i]);
      }
    });
    return;
  };
  const check = () => {
    for (let x = 0; x < currentTurn.fields.length; x++) {
      for (let y = 0; y < currentTurn.fields[x].length; y++) {
        if (
          currentTurn.fields[x][y] === currentTurn.symbol &&
          currentTurn.fields[x][y] === currentTurn.fields[x + 1][y + 1] &&
          currentTurn.fields[x][y] === currentTurn.fields[x + 2][y + 2]
        ) {
          console.log(currentTurn.name + " wins");
        } else if (
          currentTurn.fields[x][y] === currentTurn.symbol &&
          currentTurn.fields[x][y] === currentTurn.fields[x + 1][y - 1] &&
          currentTurn.fields[x][y] === currentTurn.fields[x + 2][y - 2]
        ) {
          console.log(currentTurn.name + " wins");
        } else if (
          currentTurn.fields[x][y] === currentTurn.symbol &&
          currentTurn.fields[x][y] === currentTurn.fields[x][y + 1] &&
          currentTurn.fields[x][y] === currentTurn.fields[x][y + 2]
        ) {
          console.log(currentTurn.name + " wins");
        } else if (
          currentTurn.fields[x][y] === currentTurn.symbol &&
          currentTurn.fields[x][y] === currentTurn.fields[x + 1][y] &&
          currentTurn.fields[x][y] === currentTurn.fields[x + 2][y]
        ) {
          console.log(currentTurn.name + " wins");
        }
      }
    }
  };
  return { array, render };
})();

const playerFactory = (symbol, name, fields) => {
  return { symbol, name, fields };
};

const form = (() => {
  const render = () => {
    let form = document.createElement("form");
    document.body.appendChild(form);
    let inputPlayer1 = document.createElement("input");
    form.appendChild(inputPlayer1);
    let inputPlayer2 = document.createElement("input");
    form.appendChild(inputPlayer2);
    let button = document.createElement("button");
    document.body.appendChild(button);
    button.onclick = () => {
      if (inputPlayer1.value === "" || inputPlayer2.value === "") {
        alert("You have to set a name for both players!");
      } else {
        player1 = playerFactory("X", inputPlayer1.value, [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ]);
        player2 = playerFactory("O", inputPlayer2.value, [
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
          ["", "", "", "", "", ""],
        ]);
        currentTurn = player1;
        form.remove();
        button.remove();
        gameboard.render();
      }
    };
  };
  return {
    render,
  };
})();

let player1;
let player2;
let currentTurn;
form.render();
