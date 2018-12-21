// Get references to DOM elements
const target = document.getElementById('target');
const score = document.getElementById('score');
const price = document.getElementById('price');
const stocks = document.getElementById('stocks');
const efficiency = document.getElementById('efficiency');
const autonomy = document.getElementById('autonomy');
const snacks = document.getElementById('snacks');
const equipments = document.getElementById('equipment');

let player;
let stockPrice;

// Setup
function setup() {
  // Set stock price
  stockPrice = JSON.parse(localStorage.getItem('stockPrice')) || 1000;

  // Load player or create new player.
  const saved = JSON.parse(localStorage.getItem('player'));
  player = new Player({...saved});

  target.addEventListener('click', () => player.incrementScore(player.efficiency));

  // Populate upgrades
  for (snack of SNACKS) { snacks.appendChild(createUpgrade(snack)); }
  for (equipment of EQUIPMENT) { equipments.appendChild(createUpgrade(equipment)); }

  // Save game state every second
  setInterval(player.save.bind(player), 1000);

  // Emoji confetti
  target.addEventListener('click', (evt) => emojify(evt, '🦄'));
}

// Update game every frame
function update() {
  player.incrementScore(player.autonomy / FRAMES);
  stockPrice = fluctuate(Math.max(stockPrice, RANDOMNESS));
}

// Draw updated state to page
function draw() {
  score.innerHTML = parseInt(player.score);
  efficiency.innerHTML = player.efficiency.toFixed(2);
  autonomy.innerHTML = player.autonomy;
  stocks.innerHTML = player.stocks;
  price.innerHTML = stockPrice;
}

function save() {
  localStorage.setItem('stockPrice', JSON.stringify(stockPrice));
}

// GAME LOOP
function game() {
  update();
  draw();
  save();
}

setup();

setInterval(game, 1000 / FRAMES);

