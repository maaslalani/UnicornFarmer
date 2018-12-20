class Player {
  constructor({name = 'Anonymous', score = 0, efficiency = 1, autonomy = 0, purchased = {}} = {}) {
    this.score = score;
    this.name = name;
    this.efficiency = efficiency;
    this.autonomy = autonomy;
    this.purchased = purchased;
  }
  
  incrementScore(amount = this.efficiency) {
    this.score += amount;
    this.score = round(this.score);
  }

  decrementScore(amount) {
    this.score -= amount;
    this.score = round(this.score);
  }

  incrementEfficiency(amount) {
    this.efficiency += amount;
    this.efficiency = round(this.efficiency);
  }

  incrementAutonomy(amount) {
    this.autonomy += amount;
    this.autonomy = round(this.autonomy);
  }

  purchase(item) {
    let { cost, name, efficiency, autonomy } = item;

    // Ensure player can afford upgrade
    if (this.score < cost) {
      alert(`Cannot afford ${name} yet, you need ${parseInt(cost - this.score)} more unicorns 🦄`)
      return
    }

    // Purchase Item
    this.decrementScore(cost);

    efficiency && this.incrementEfficiency(efficiency);
    autonomy && this.incrementAutonomy(autonomy);

    this.purchased[name] = this.purchase[name] + 1 || 1;
  }

  save() {
    localStorage.setItem('player', JSON.stringify(this))
  }

}
