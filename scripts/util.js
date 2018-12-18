const FRAMES = 24

const SNACKS = [
  new Snack({ name: 'Cookie', emoji: '🍪', cost: 100, efficiency: 1 }),
  new Snack({ name: 'Popcorn', emoji: '🍿', cost: 1000, efficiency: 15 }),
  new Snack({ name: 'Avocado', emoji: '🥑', cost: 2500, efficiency: 60 }),
  new Snack({ name: 'Pancakes', emoji: '🥞', cost: 5000, efficiency: 150 }),
  new Snack({ name: 'Baguette', emoji: '🥖', cost: 10000, efficiency: 325 }),
  new Snack({ name: 'Taco', emoji: '🌮', cost: 50000, efficiency: 750 }),
  new Snack({ name: 'Doughnut', emoji: '🍩', cost: 1000000, efficiency: 1500 }),
  new Snack({ name: 'Milk', emoji: '🥛', cost: 2500000, efficiency: 5000 }),
]

const EQUIPMENT = [
  new Equipment({ name: 'Floppy Disk', emoji: '💾', cost: 1000, autonomy: 1 }),
  new Equipment({ name: 'Compact Disk', emoji: '💿', cost: 5000, autonomy: 5 }),
  new Equipment({ name: 'Mouse', emoji: '🖱', cost: 10000, autonomy: 10 }),
  new Equipment({ name: 'Keyboard', emoji: '⌨️', cost: 20000, autonomy: 20 }),
  new Equipment({ name: 'Phone', emoji: '📱', cost: 50000, autonomy: 55 }),
  new Equipment({ name: 'Laptop', emoji: '💻', cost: 75000, autonomy: 80 }),
  new Equipment({ name: 'Monitor', emoji: '🖥', cost: 300000, autonomy: 350 }),
  new Equipment({ name: 'Smart Watch', emoji: '⌚️', cost: 1250000, autonomy: 1500 }),
]

const createUpgrade = upgrade => { 
  let element = document.createElement('div');

  element.classList.add('snack');
  element.classList.add('equipment');

  element.addEventListener('click', () => player.purchase(upgrade))
  
  element.innerHTML = `
    <p>${upgrade.name} ${upgrade.emoji}
      <span class="upgrade">+${upgrade.autonomy || upgrade.efficiency}</span>
      <span class="cost">${upgrade.cost}</span>
    </p>
  ` 
  return element
}
