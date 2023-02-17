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
    while (this._player1.lifePoints !== -1 
      && this._monster.some((e) => e.lifePoints !== -1)) {
      this._monster.forEach((e) => {
        this._player1.attack(e);
        e.attack(this._player1);
      });
    } return super.fight(); 
  }
}