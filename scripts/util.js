const FRAMES = 24

const SNACKS = [
  new Snack({ name: 'Cookie', emoji: '🍪', cost: 10, efficiency: 0.1 }),
  new Snack({ name: 'Popcorn', emoji: '🍿', cost: 100, efficiency: 1.25 }),
  new Snack({ name: 'Avocado', emoji: '🥑', cost: 250, efficiency: 3.0 }),
  new Snack({ name: 'Pancakes', emoji: '🥞', cost: 500, efficiency: 7.5 }),
  new Snack({ name: 'Baguette', emoji: '🥖', cost: 1000, efficiency: 20.0 }),
  new Snack({ name: 'Taco', emoji: '🌮', cost: 5000, efficiency: 125.0 }),
  new Snack({ name: 'Doughnut', emoji: '🍩', cost: 100000, efficiency: 2500.0 }),
  new Snack({ name: 'Milk', emoji: '🥛', cost: 1000000, efficiency: 30000.0 }),
]

const EQUIPMENT = [
  new Equipment({ name: 'Floppy Disk', emoji: '💾', cost: 100, autonomy: 0.1 }),
  new Equipment({ name: 'Compact Disk', emoji: '💿', cost: 250, autonomy: 0.25 }),
  new Equipment({ name: 'Mouse', emoji: '🖱', cost: 1000, autonomy: 1 }),
  new Equipment({ name: 'Keyboard', emoji: '⌨️', cost: 2000, autonomy: 2 }),
  new Equipment({ name: 'Phone', emoji: '📱', cost: 5000, autonomy: 5 }),
  new Equipment({ name: 'Laptop', emoji: '💻', cost: 7500, autonomy: 10 }),
  new Equipment({ name: 'Monitor', emoji: '🖥', cost: 30000, autonomy: 25 }),
  new Equipment({ name: 'Smart Watch', emoji: '⌚️', cost: 125000, autonomy: 100 }),
]

const createSnack = snack => {
  let element = document.createElement('div');
  element.classList.add('snack')

  element.addEventListener('click', () => {
    // Ensure player can afford upgrade
    if (player.score < snack.cost) {
      alert(`You cannot afford ${snack.name} yet, you need ${snack.cost - player.score} more 🦄`)
      return
    }
    player.decrementScore(snack.cost);
    player.incrementEfficiency(snack.efficiency);
    player.purchase(snack);
  })

  element.innerHTML = `
    <p>${snack.name} ${snack.emoji}
      <span class="upgrade">+${snack.efficiency}</span>
      <span class="cost">${snack.cost}</span>
    </p>
  `
  return element
}

const createEquipment = equipment => {
  let element = document.createElement('div');
  element.classList.add('equipment')

  element.addEventListener('click', () => {
    // Ensure player can afford upgrade
    if (player.score < equipment.cost) {
      alert(`You cannot afford ${equipment.name} yet, you need ${equipment.cost - player.score} more 🦄`)
      return
    }
    player.decrementScore(equipment.cost);
    player.incrementAutonomy(equipment.autonomy);
    player.purchase(equipment);
  })

  element.innerHTML = `
    <p>${equipment.name} ${equipment.emoji}
      <span class="upgrade">+${equipment.autonomy}</span>
      <span class="cost">${equipment.cost}</span>
    </p>
  ` 
  return element
}
