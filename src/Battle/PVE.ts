import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1:Fighter;
  private _monster:Array<Monster | SimpleFighter>;
  constructor(player1:Fighter, monster:Array<Monster | SimpleFighter>) {
    super(player1);
    this._player1 = player1;
    this._monster = monster;
  }

  fight(): number {
    for (let i = 0; i < this._monster.length; i += 1) {
      this._player1.attack(this._monster[i]);
      this._monster[i].attack(this._player1);
    }
    return super.fight();
  }
}