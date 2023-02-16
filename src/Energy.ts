export type EnergyTypes = 'mana' | 'stamina';

export default interface Energy {
  type_:EnergyTypes;
  amount:number,
}
