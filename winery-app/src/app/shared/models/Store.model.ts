import { City } from "./City.model";

export class Store {
  storeId?: number;
  storeName: string;
  cityDTO: { cityId: number};
  address: string;
  phone: string;
  mobile: string;
  email: string;
  details: string;

  constructor(
    storeName: string,
    cityDTO: { cityId: number},
    address: string,
    phone: string,
    mobile: string,
    email: string,
    details: string,
    storeId?: number
  ) {
    this.storeName = storeName;
    this.cityDTO = cityDTO;
    this.address = address;
    this.phone = phone;
    this.mobile = mobile;
    this.email = email;
    this.details = details;
    if (storeId) this.storeId = storeId;
  }
}
