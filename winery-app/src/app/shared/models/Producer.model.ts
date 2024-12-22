import { Region } from "./Region.model";

export interface Producer {
  producerId: number,
  producerName: string,
  details: string,
  regionDTO: Region
}