export default abstract class Race {
  constructor(private _name:string, private _dexterity:number) {}
  
  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number ;// coloquei o get pois só a filha pode ter o poder de implementar
}
