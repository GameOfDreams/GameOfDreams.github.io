const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")
drawing = new Image();
drawing.src = "img.png";

const game = new GameOfLife()
game.gameSetUp()

window.onload = () => {
  
  ctx.drawImage(drawing, 0, 0, 500, 500);
  game.canvasToGol();
  
   document.querySelector("#start-random").addEventListener("click", () => {
       game.arrayRandomize();
       game.fillArray();
       window.setInterval(() => {
           game.runGame();
       }, 300)
    })
  document.querySelector("#stop").addEventListener("click", () => {
       game.gameSetUp();
  })
}