import Energy from '../Energy';
import SimpleFlighter from './SimpleFlighter';

export default interface Fighter extends SimpleFlighter{

  defense:number
  energy?:Energy
  
  special?(enemy:Fighter):void
  levelUp():void

}