class Player {
  constructor({name = 'Anonymous', score = 0, efficiency = 1.0, autonomy = 0, purchased = []} = {}) {
    this.score = score;
    this.name = name;
    this.efficiency = efficiency;
    this.autonomy = autonomy;
    this.purchased = purchased;
  }
  
  incrementScore(amount = this.efficiency) {
    this.score += amount;
  }

  incrementefficiency(amount) {
    this.efficiency += amount;
  }

  incrementAutonomy(amount) {
    this.autonomy += amount;
  }

  purchase(item) {
    this.purchased.push(item);
  }
}

