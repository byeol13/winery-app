import { Country } from "./Country.model";

export interface Region {
  id: number,
  region_name: string,
  country_id: Country
}