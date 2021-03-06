const FRAMES = 24;
const RANDOMNESS = 25;
const DELAY = 100;

// List of purchasable snacks
const SNACKS = [
  new Snack({name: 'Cookie', emoji: '🍪', cost: 10, efficiency: 0.1}),
  new Snack({name: 'Popcorn', emoji: '🍿', cost: 100, efficiency: 1.25}),
  new Snack({name: 'Avocado', emoji: '🥑', cost: 200, efficiency: 2.5}),
  new Snack({name: 'Pancakes', emoji: '🥞', cost: 500, efficiency: 7.5}),
  new Snack({name: 'Baguette', emoji: '🥖', cost: 1000, efficiency: 15}),
  new Snack({name: 'Taco', emoji: '🌮', cost: 5000, efficiency: 75}),
  new Snack({name: 'Bagel', emoji: '🥯', cost: 10000, efficiency: 150}),
  new Snack({name: 'Milk', emoji: '🥛', cost: 250000, efficiency: 5000}),
];

// List of purchasable equipment
const EQUIPMENT = [
  new Equipment({name: 'Floppy Disk', emoji: '💾', cost: 100, autonomy: 1}),
  new Equipment({name: 'Compact Disk', emoji: '💿', cost: 500, autonomy: 5}),
  new Equipment({name: 'Mouse', emoji: '🖱', cost: 1000, autonomy: 10}),
  new Equipment({name: 'Keyboard', emoji: '⌨️', cost: 2000, autonomy: 20}),
  new Equipment({name: 'Phone', emoji: '📱', cost: 5000, autonomy: 55}),
  new Equipment({name: 'Laptop', emoji: '💻', cost: 7500, autonomy: 80}),
  new Equipment({name: 'Monitor', emoji: '🖥', cost: 30000, autonomy: 350}),
  new Equipment({name: 'Watch', emoji: '⌚️', cost: 125000, autonomy: 1500}),
];

// Create an upgrade component and add it to the store
const createUpgrade = (upgrade) => {
  const element = document.createElement('div');

  element.classList.add('upgrade');
  element.addEventListener('click', () => player.purchase(upgrade));

  element.innerHTML = `
    <p class='purchase'>
      <span class='name'>${upgrade.name} ${upgrade.emoji}</span>
      <span class='increase'>+${upgrade.autonomy || upgrade.efficiency}</span>
      <span class='cost'>${upgrade.cost}</span>
    </p>
  `;
  return element;
};

const emojify = (evt, emoji) => {
  const element = document.createElement('div');

  element.classList.add('emoji');
  element.innerHTML = emoji;

  // Position emoji
  const {clientX, clientY} = evt;

  const x = clientX + ((Math.random() - 1) * RANDOMNESS);
  const y = clientY + ((Math.random() - 1) * RANDOMNESS);

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  // Add emoji
  target.appendChild(element);

  // Make the emoji fade away using CSS transitions
  setTimeout(() => { element.style.opacity = 0; }, DELAY);

  // Remove emoji after half a second
  setTimeout(() => { element.parentNode.removeChild(element); }, 500);
};

const round = (number) => parseFloat(number.toFixed(2));

const fluctuate = (number) =>
  Math.round(Math.random() > 0.5
    ? number - (Math.random() * RANDOMNESS)
    : number + (Math.random() * RANDOMNESS));

// Cheat codes
function alison() { player.autonomy += 5000; }
function dan() { player.score += 50000; }
function jonathan() { player.efficiency += 5000; }
function tobi() { stockPrice = 1000000; }

