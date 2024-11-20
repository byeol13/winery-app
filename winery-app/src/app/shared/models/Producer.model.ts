import { Region } from "./Region.model";

export interface Producer {
  id: number,
  producer_name: string,
  details: string,
  region_id: Region
}