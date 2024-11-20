import { Category } from "./Category.model";
import { Producer } from "./Producer.model";

export interface Bottle {
  id: number,
  full_name: string,
  label: string,
  volume: number,
  year_produced: number,
  picture: string,
  alcohol_percentage: number,
  current_price: number,
  category_id: Category,
  producer_id: Producer
}
