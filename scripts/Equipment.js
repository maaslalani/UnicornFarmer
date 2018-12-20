class Equipment extends Upgrade {
  constructor({ name, emoji, cost, autonomy }) {
    super({ name, emoji, cost });
    this.autonomy = autonomy;
  }
}
