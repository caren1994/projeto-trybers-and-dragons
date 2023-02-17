import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player1:Fighter, private monster:Array<Fighter | SimpleFighter>) {
    super(player1);
  }

  fight(): number {
    for (let i = 0; i < this.monster.length; i += 1) {
      this.player.attack(this.monster[i]);
      this.monster[i].attack(this.player);
    }
    return super.fight();
  }
}