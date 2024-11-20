import { Country } from "./Country.model";

export interface City {
  id: number,
  postal_code: number,
  city_name: string,
  country_id: Country
}