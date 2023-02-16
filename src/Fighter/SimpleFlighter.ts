export default interface SimpleFlighter{
  lifePoints:number
  strength:number
  attack(enemy:SimpleFlighter):void
  receiveDamage(attackPoints:number):number
}