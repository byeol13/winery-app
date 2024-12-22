import { City } from "./City.model"

export interface Store {
  id: number,
  storeName: string,
  cityDTO: City,
  address: string,
  phone: string,
  mobile: string,
  email: string,
  details: string
}