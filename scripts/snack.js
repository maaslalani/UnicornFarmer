class Snack extends Upgrade {
  constructor({name, emoji, cost, efficiency}) {
    super({name, emoji, cost});
    this.efficiency = efficiency;
  }
}

