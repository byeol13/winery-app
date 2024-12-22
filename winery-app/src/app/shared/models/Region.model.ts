import { Country } from "./Country.model";

export interface Region {
  regionId: number,
  regionName: string,
  countryDTO: Country
}