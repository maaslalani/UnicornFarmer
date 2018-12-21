class Player {
  constructor({name = 'Anonymous', score = 0, efficiency = 1, autonomy = 0, stocks = 0, purchased = {}}) {
    this.score = score;
    this.name = name;
    this.efficiency = efficiency;
    this.autonomy = autonomy;
    this.purchased = purchased;
    this.stocks = stocks;
  }

  incrementScore(amount = this.efficiency) {
    this.score += round(amount);
  }

  decrementScore(amount) {
    this.score -= round(amount);
  }

  incrementEfficiency(amount) {
    this.efficiency += round(amount);
  }

  incrementAutonomy(amount) {
    this.autonomy += round(amount);
  }

  invest(quantity) {
    const total = stockPrice * quantity;

    if (total > this.score) {
      alert(`You cannot afford to purchase ${quantity} stocks 🌽. You need ${parseInt(total - this.score)} more unicorns 🦄.`);
      return;
    }

    this.score -= total;
    this.stocks += quantity;
  }

  liquidate(quantity) {
    let total = stockPrice * quantity;

    if (quantity > this.stocks) {
      alert(`You cannot sell ${quantity} stocks 🌽. You only have ${this.stocks} stocks 🌽.`)
      return
    }

    this.score += total;
    this.stocks -= quantity;
  }

  purchase(item) {
    const {cost, name, efficiency, autonomy} = item;

    // Ensure player can afford upgrade
    if (this.score < cost) {
      alert(`Cannot afford ${name} yet, you need ${parseInt(cost - this.score)} more unicorns 🦄`);
      return;
    }

    // Purchase Item
    this.decrementScore(cost);

    if (efficiency) { this.incrementEfficiency(efficiency); }
    if (autonomy) { this.incrementAutonomy(autonomy); }

    this.purchased[name] = this.purchase[name] + 1 || 1;
  }

  save() {
    localStorage.setItem('player', JSON.stringify(this));
  }

}

