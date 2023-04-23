const gameboard = (() => {
  let array = [[], [], []];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let div = document.createElement("div");
      div.setAttribute("class", "field");
      div.setAttribute("id", j);
      array[i].push(div);
    }
  }
  const render = () => {
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
  return { array, render };
})();

const playerFactory = (symbol, name) => {
  return { symbol, name };
};
