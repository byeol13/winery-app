import { Country } from "./Country.model";

export interface City {
  cityId: number,
  postalCode: number,
  cityName: string,
  countryDTO: Country
}