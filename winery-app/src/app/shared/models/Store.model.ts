import { City } from "./City.model"

export interface Store {
  id: number,
  store_name: string,
  city_id: City,
  address: string,
  phone: string,
  mobile: string,
  email: string,
  details: string
}