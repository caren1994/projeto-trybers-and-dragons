abstract class Race {
  constructor(public _name:string, public _dexterity:number) {}
  
  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract maxLifePoints():number ;
}
export default Race;