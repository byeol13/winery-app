export class Region {
  regionId?: number;
  regionName: string;
  countryDTO: { countryId: number};

  constructor(
    regionName: string,
    countryDTO: { countryId: number},
    regionId?: number,
  ) {
    this.regionName = regionName;
    this.countryDTO = countryDTO;
    if (regionId) this.regionId = regionId;
  }
  
}