import { Category } from "./Category.model";
import { Producer } from "./Producer.model";

export interface Bottle {
  id: number,
  fullName: string,
  label: string,
  volume: number,
  yearProduced: number,
  picture: string,
  alcoholPercentage: number,
  currentPrice: number,
  categoryDTO: Category,
  producerDTO: Producer
}
