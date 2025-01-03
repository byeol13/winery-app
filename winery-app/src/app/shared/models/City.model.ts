export class City {
  cityId?: number;
  postalCode: number;
  cityName: string;
  countryDTO: { countryId: number};

  constructor(
    postalCode: number,
    cityName: string,
    countryDTO: { countryId: number},
    cityId?: number,
  ) {
    this.cityName = cityName;
    this.postalCode = postalCode;
    this.countryDTO = countryDTO;
    if (cityId) this.cityId = cityId;
  }
}