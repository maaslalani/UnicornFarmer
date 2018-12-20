// Get references to DOM elements
const target = document.getElementById('target');
const score = document.getElementById('score');
const efficiency = document.getElementById('efficiency');
const autonomy = document.getElementById('autonomy');
const snacks = document.getElementById('snacks');
const equipments = document.getElementById('equipment');
const upgrades = document.getElementsByClassName('upgrade');

let player;

// Setup
function setup() {
  // Load player or create new player.
  let saved = JSON.parse(localStorage.getItem('player'))
  player = new Player({...saved});

  target.addEventListener('click', () => player.incrementScore(player.efficiency));

  for (snack of SNACKS)
    snacks.appendChild(createUpgrade(snack));

  for (equipment of EQUIPMENT)
    equipments.appendChild(createUpgrade(equipment));

  // Save game state every second
  setInterval(player.save.bind(player), 1000);

  // Emoji confetti
  target.addEventListener('click', event => emojify(event, '🦄'));
}

// Update game every frame
function update() {
  player.incrementScore(player.autonomy / FRAMES);
}

// Draw updated state to page
function draw() {
  score.innerHTML = parseInt(player.score);
  efficiency.innerHTML = player.efficiency.toFixed(2);
  autonomy.innerHTML = player.autonomy;
}

// GAME LOOP
function game() {
  update();
  draw();
}

setup();

setInterval(game, 1000 / FRAMES);
