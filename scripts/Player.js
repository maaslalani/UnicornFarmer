class Player {
  constructor({name = 'Anonymous', score = 0, efficiency = 1, autonomy = 0, purchased = []} = {}) {
    this.score = score;
    this.name = name;
    this.efficiency = efficiency;
    this.autonomy = autonomy;
    this.purchased = purchased;
  }
  
  incrementScore(amount = this.efficiency) {
    this.score += amount;
  }

  decrementScore(amount) {
    this.score -= amount
  }

  incrementEfficiency(amount) {
    this.efficiency += amount;
  }

  incrementAutonomy(amount) {
    this.autonomy += amount;
  }

  purchase(item) {
    // Ensure player can afford upgrade
    if (this.score < item.cost) {
      alert(`Cannot afford ${item.name} yet, you need ${item.cost - this.score} more unicorns 🦄`)
      return
    }

    // Purchase Item
    this.decrementScore(item.cost);

    item.efficiency && this.incrementEfficiency(item.efficiency);
    item.autonomy && this.incrementAutonomy(item.autonomy);

    this.purchased.push(item);
  }
}

