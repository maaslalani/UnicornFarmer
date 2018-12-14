const target = document.getElementById('target');
const score = document.getElementById('score');
const efficiency = document.getElementById('efficiency');
const autonomy = document.getElementById('autonomy');
const snacks = document.getElementById('snacks');
const equipments = document.getElementById('equipment');

let player;

// GAME LOOP
function setup() {
  // Load player or create new player.
  player = new Player();
  target.addEventListener('click', () => player.incrementScore(1));
  for (snack of SNACKS) {
    let upgrade = document.createElement('p')
    upgrade.innerHTML = `${snack.name} ${snack.emoji}`
    snacks.appendChild(upgrade)
  }
  for (equipment of EQUIPMENT) {
    let upgrade = document.createElement('p')
    upgrade.innerHTML = `${equipment.name} ${equipment.emoji}`
    equipments.appendChild(upgrade)
  }
}

function update() {
  player.incrementScore(0.5 / FRAMES);
}

function draw() {
  score.innerHTML = parseInt(player.score);
  efficiency.innerHTML = player.efficiency;
  autonomy.innerHTML = parseInt(player.autonomy);
}

function game() {
  update();
  draw();
}

setup()
setInterval(game, 1000 / FRAMES);
