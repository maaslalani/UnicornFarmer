const FRAMES = 24

const SNACKS = [
  new Snack({ name: 'Cookie', emoji: '🍪', cost: 10, efficiency: 0.1 }),
  new Snack({ name: 'Popcorn', emoji: '🍿', cost: 100, efficiency: 1.25 }),
  new Snack({ name: 'Avocado', emoji: '🥑', cost: 250, efficiency: 3.0 }),
  new Snack({ name: 'Pancakes', emoji: '🥞', cost: 500, efficiency: 7.5 }),
  new Snack({ name: 'Baguette', emoji: '🥖', cost: 1000, efficiency: 20.0 }),
  new Snack({ name: 'Taco', emoji: '🌮', cost: 5000, efficiency: 125.0 }),
  new Snack({ name: 'Doughnut', emoji: '🍩', cost: 100000, efficiency: 2500.0 }),
  new Snack({ name: 'Milk', emoji: '🥛', cost: 1000000, efficiency: 0.1 }),
]

const createSnack = snack => {
  let element = document.createElement('div');
  element.innerHTML = `<p>${snack.name} ${snack.emoji}</p><p>cost: ${snack.cost} 🦄</p><p>efficiency: +${snack.efficiency}</p>`
  return element
}

const EQUIPMENT = [
  new Equipment({ name: 'Floppy Disk', emoji: '💾', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Compact Disk', emoji: '💿', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Mouse', emoji: '🖱', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Keyboard', emoji: '⌨️', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Phone', emoji: '📱', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Laptop', emoji: '💻', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Monitor', emoji: '🖥', cost: 100, autonomy: 100 }),
  new Equipment({ name: 'Smart Watch', emoji: '⌚️', cost: 100, autonomy: 100 }),
]

const createEquipment = equipment => {
  let element = document.createElement('div');
  element.innerHTML = `<p>${equipment.name} ${equipment.emoji}</p><p>cost: ${equipment.cost} 🦄</p><p>autonomy: +${equipment.autonomy}</p>`
  return element
}
