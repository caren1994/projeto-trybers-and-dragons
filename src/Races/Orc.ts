import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints:number;
  static countInstancesOrc = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Orc.countInstancesOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.countInstancesOrc;
  }
}